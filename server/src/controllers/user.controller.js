const { User, Tower, Department, Roles, conn } = require("../db");
const bcrypt = require("bcryptjs");

const sequelize = require("sequelize");
const { where } = require("sequelize");
const Op = sequelize.Op;

async function createUser(req, res, next) {
  console.log("entramos a crear usuario");
  async function departamento(TowerName, floor, numDeApartamento) {
    const towerId = await Tower.findOne({
      where: {
        tower_name: TowerName,
      },
      attributes: ["id"],
      raw: true,
    });


    const departamentId = await Department.findOne({
      where: {
        floor: floor,
        tower_id: towerId.id,
        Number: numDeApartamento,
      },
      attributes: ["id"],
    });
    return departamentId.id;
  }
  if (req.body.numDeApartamento.length > 3) {
    var floor = req.body.numDeApartamento[0] + req.body.numDeApartamento[1]
    var apto = req.body.numDeApartamento[3]

  } else {
    var floor = req.body.numDeApartamento[0]
    var apto = req.body.numDeApartamento[2]
  }
  const apartamentID = await departamento(
    req.body.TowerName,
    floor,
    apto,
  );

  User.create({
    departament_id: apartamentID,
    email: req.body.email,
    dni: req.body.dni,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    cel: req.body.cel,
    image: req.body.image,
    password: bcrypt.hashSync(req.body.password, 10),
  })
    // .then((user) => {
    //   res.status(200).json(user);
    // })
    .then((user) => {
      if (req.body.roles) {
        Roles.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res
              .status(200)
              .json({ message: "Usuario Creado Satisfactoriamente", user });
          });
        });
      } else {
        user.setRoles([1]).then(() => {
          res.json({ message: "Usuario Creado Satisfactoriamente", user });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
}

async function updateUser(req, res, next) {
  console.log(req.body);
  try {
    let data = await User.findByPk(req.params.id);

    /*  if(Number(req.params.id) !== req.user.id && req.user.role) */
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }
    console.log("data", data);

    data.update(req.body);

    res.status(202).send({ data, message: "Usuario Actualizado Exitosamente" });
  } catch (error) {
    console.log(error);
  }
}

async function getUsers(req, res, next) {
  try {
    console.log("entramos a usuarios");
    const users = await User.findAll({
      attributes: ["id", "first_name", "last_name", "email", "dni"],
    });

    /* const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();  */

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los usuarios",
      error,
    });
  }
}

async function getUserById(req, res, next) {
  try {
    let { id } = req.params;
    let data = await User.findOne({
      where: { id },
    });

    return data
      ? res.status(200).send({ data, message: "Id encontrado" })
      : res.status(400).send({ message: "No se encontro Id" });
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteUser(req, res, next) {
  try {
    let { id } = req.params;
    if (id) {
      const data = await User.findOne({
        where: { id },
      });
      if (data) {
        await data.destroy();
        res.status(200).send({ message: "usuario borrado Satisfactoriamente" });
      } else {
        res.status(400).send({ message: "usuario no Existe " });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getDashboard(req, res) {
  try {
    const [result, metadata] =
      await conn.query(`select d.floor, count(u.id) as habitantsFloor  from users u
    inner join departments d 
    on d.id = u.departament_id 
    where  d.id = u.departament_id 
    group by d.floor
    order by d.floor;`);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json("error del server");
  }
}

async function getUserByFloor(req, res) {
  try {
    const { query } = req; //la funcion tiene que recibir las querys (page,floor)
    console.log(query);
    const limit = 10;
    const page = query.page - 1;
    const offset = page * limit;
    const { count, rows } = await Department.findAndCountAll({
      where: {
        floor: query.floor,
      },
      include: [
        {
          model: User,
          as: "user",
        },
        {
          model: Tower,
          as: "tower",
        },
      ],

      offset: offset,
      limit: limit,
      distinct: true, //para que no cuente los includes
    });
    const response = {
      count,
      rows,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json("error del server");
  }
}

async function searchFieldsUser(req, res) {
  try {
    const { query } = req;
    console.log(query);
    const limit = 10;
    const page = query.page - 1;
    const offset = page * limit;
    let where;
    //si lo que viene por parametro no se puede pasar a numero isNaN devuelve true y lo remuevo del objeto para que no se rompa
    if (isNaN(query.search)) {
      where = {
        [Op.or]: [
          { first_name: { [Op.like]: `%${query.search}%` } },
          { last_name: { [Op.like]: `%${query.search}%` } },
          { email: { [Op.like]: `%${query.search}%` } },
        ],
      };
    } else {
      //si son numeros , para buscarlos en la db tengo que pasar el campo ese a varchar porque es integer o date etc
      where = {
        [Op.and]: [
          sequelize.where(conn.cast(conn.col("departament_id"), "varchar"), {
            [Op.like]: `%${query.search}%`,
          }),
          sequelize.where(conn.cast(conn.col("dni"), "varchar"), {
            [Op.like]: `%${query.search}%`,
          }),
        ],
      };
    }
    const { count, rows } = await User.findAndCountAll({
      where: where,
      include: [
        {
          model: Department,
          as: "departments",
          include: [
            {
              model: Tower,
              as: "tower",
            },
          ],
        },
      ],

      offset: offset,
      limit: limit,
      distinct: true, //para que no cuente los includes
    });
    const result = {
      count,
      rows,
    };
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json("error del server");
  }
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUsers,
  getDashboard,
  getUserByFloor,
  searchFieldsUser,
};

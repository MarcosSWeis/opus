const { User, Tower, Department } = require("../db");
const bcrypt = require("bcryptjs");
/*const { create, update } = require("../services/user.services");*/


async function createUser(req, res, next) {
  async function departamento(TowerName, floor, numDeApartamento) {
    const towerId = await Tower.findOne({
      where: {
        tower_name: TowerName,
      },
      attributes: ["id"],
      raw: true,
    });

    console.log(towerId, "hola");
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

  const apartamentID = await departamento(
    req.body.TowerName,
    req.body.floor,
    req.body.numDeApartamento
  );

  User.create({
    departament_id: apartamentID,
    email: req.body.email,
    dni: req.body.dni,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: bcrypt.hashSync(req.body.password, 10),
  })
    .then((user) => res.json(user))
    .catch(next);
}

async function updateUser(req, res, next) {
  try {
    let data = await User.findByPk(req.params.id);

    console.log("data", data);
    data.update(req.body);

    /*    const toAdmin = await Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }); */
    /*  console.log("toAdmin", toAdmin);
        data.setRoles(toAdmin); */
    res.status(202).send({ data, message: "Usuario Actualizado Exitosamente" });
  } catch (error) {
    console.log(error);
  }
}



async function getUsers(req, res, next) {
  try {
    console.log("entramos a usuarios");
    const users = await User.findAll({
      attributes: ["id", "firt_name", "last_name", "email", "dni"],
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

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUsers,
};

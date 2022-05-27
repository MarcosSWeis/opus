const { User } = require("../db");
const bcrypt = require("bcryptjs");
/* const { create, update } = require("../services/user.services"); */



/**
 * It creates a new user with the email, dni, first_name, last_name and password from the request body,
 * and then returns the created user as a JSON object.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 */
async function createUser(req, res, next) {
 
User.create({
email:req.body.email,
dni:req.body.dni,
firt_name:req.body.firt_name,
last_name:req.body.last_name,
password:bcrypt.hashSync(req.body.password, 10) })
    .then((user) => res.json(user))
    .catch(next);
}






/**
 * I'm trying to update the user's data and the roles that the user has.
 * </code>
 * @param req - the request object
 * @param res - the response object
 * @param next - The next middleware function in the stack.
 */
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






/**
 * It's an async function that returns a promise that resolves to an array of users.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - A function that you call to pass control to the next middleware function.
 */

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




/**
 * It's an async function that takes in a request, response, and next function as parameters. It then
 * tries to find a user by id and returns a 200 status code with the data and a message if the user is
 * found, or a 400 status code with a message if the user is not found. If there is an error, it
 * returns a 500 status code with the error.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 * @returns The data is being returned.
 */
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






/**
 * It deletes a user from the database.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 */

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

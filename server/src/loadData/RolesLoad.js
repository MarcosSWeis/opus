const bcrypt = require("bcryptjs");
const { Roles, User } = require('../db');



async function defaultAdminAndRoles() {
    try {
      ///////////////////////////////////////ROLES
      const roldb = await Roles.findAll();
      if (roldb.length === 0) {
        const roAdmin = await Roles.create({
          id: 1,
          name: "user"
        });
        const rolUser = await Roles.create({
          id: 2,
          name: "admin"
        });
    }
       else {
        console.log("Roles ya existen");
      }
      ///////////////////////////////////////////ADMIN DEFAULT
      const userdb = await User.findOne({
        where: {
          id: 601
        }
      })
      if (!userdb) {
        const user = await User.create({
        first_name: "Admin",
          last_name: "admin",
          email: "admin@gmail.com",
          dni:12345678,
          cel:123456,
          isAdmin: true,
          password: bcrypt.hashSync("123456789", 8),
         
        });
        await user.addRoles(2);
      } else {
        console.log("Admin ya existe");
      }
    } catch (error) {
      console.log(error);
    }
  }


  module.exports = {

    defaultAdminAndRoles
  }
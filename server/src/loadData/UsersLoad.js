const { User } = require("../db");
const {UsersLoad} = require("../datamock/Users.js");
const bcrypt = require ('bcryptjs')
const loadUsers = async () => {
  try {
    await Promise.all(UsersLoad.map( async (users) =>{ 
    await User.create({email:users.email, dni:users.dni, first_name:users.first_name, last_name:users.last_name, departament_id:users.departament_id, cel:users.cel, image:users.image,
    
      password:bcrypt.hashSync(users.password),
    
    })})  
    );
   
  } catch (error) {
    console.log (error);
  }
};

module.exports = {
  loadUsers,
}
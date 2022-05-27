const { User } = require("../db");
const {UsersLoad} = require("../datamock/Users.js");

const loadUsers = async () => {
  try {
    await Promise.all(UsersLoad.map( async (users) =>{ 
    await User.create(users)  
    }))
   
  } catch (error) {
    console.log (error);
  }
};

module.exports = {
  loadUsers,
}
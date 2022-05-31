const {User, user_Roles} = require('../db');




async function getUserRoles(req,res,next){

try{
const userRoles = await user_Roles.findAll();
const users = await User.findAll();


}catch(err){

}



}



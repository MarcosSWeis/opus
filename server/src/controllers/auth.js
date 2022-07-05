const { User, ROLES} = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require("dotenv").config();
const {SECRET} = process.env


const signIn = (req,res,next) => {


User.findOne({

    where:{
        email:req.body.email
    }
})
.then(async user => {

   if(!user){

    return res.status(404).send({message:'Usuario no Registrado'});
   }

   let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
   if(!passwordIsValid){
    return res.status(401).send({accessToken:null,message:'Password incorrecto'});


   }

   const token = jwt.sign({id:user.id},SECRET,{
       expiresIn:86400 //24 horas))

});
  let authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
res.status(200).send({
id:user.id,
firtsname:user.first_name,
lastname:user.last_name,
email:user.email,
roles:authorities,
dni:user.dni,
accessToken:token,
cel:user.cel




})

})



})
.catch((err) => {
    console.log(err);
    res.status(500).send({message:err.message})
});

}

module.exports = {

    signIn
}
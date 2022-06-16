const { User, ROLES } = require("../db");

/**
 * It checks if the email or dni already exists in the database, if it does, it sends a message to the
 * user, if not, it continues with the next function.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when you want to pass control to the next middleware
 * function in the stack.
 */
const checkDuplicateEmailOrDni = (req, res, next) => {
  //email
  User.findOne({ where: { email: req.body.email } }).then((user) => {
    if (user) {
      console.log ("email ya existe");
      res.status(400).send({ message: "Email ya existe" });
      return;
    }

    User.findOne({ where: { dni: req.body.dni } }).then((user) => {
      if (user) {
        console.log ("Dni ya existe");
        res.status(400).send({ message: "Dni ya existe" });
        return;
      }
      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

/* const verifyDuplicatedInUpdate =(id, params) => {

    return new Promise((resolve, reject) => {
        User.findOne({ where: { email: params.email } })
        .then((user) => {
            if (user) {
                if (user.id != id) {
                    reject('Email ya existe');
                } else {
                    resolve();
                }
            } else {
                resolve();
            }
        })
        .catch((err) => {
            reject(err);
        });
    });

    
} */

module.exports = {
  checkDuplicateEmailOrDni,
  checkRolesExisted
};

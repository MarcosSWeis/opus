const jwt = require("jsonwebtoken");
const config = require("./../config/auth.config");
const { User } = require("../db");



const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(401).send({ message: "No se Recibio Token" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      res.status(403).send({ message: "No Autorizado" });
    }
    req.userId = decoded.id;

    next();
  });
};

const isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({ message: "Requiere ser Administrador" });

      return;
    });
  });
};

const isUser = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "user") {
          next();
          return;
        }

        res.status(403).send({ message: "Requiere ser Usuario" });
      }
    });
  });
};

/* const authJwt = {


verifyToken:verifyToken,
isUser:isUser,
isAdmin:isAdmin

}
 */

module.exports = {
 isAdmin,
 isUser,
 verifyToken
};

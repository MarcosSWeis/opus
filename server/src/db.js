require("dotenv").config(/*{ path: __dirname + "/.env" }*/);
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// console.log(DB_USER);
// console.log(DB_PASSWORD);
// console.log(DB_NAME);
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: true, //console.log, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

/* 
let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/gallery`,
        { logging: false, native: false }
      );
 */

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  User,
  Tower,
  Condos,
  Department,
  Comment,
  Social_space,
  Shift,
  Response,
  Roles,
  Carrousel,
  Social_network,
} = sequelize.models;

//aqui irian las tablas con sus relaciones y asociaciones esta esa como ejemplo

//a condominium has many towers
Condos.hasMany(Tower, {
  as: "tower",
  foreignKey: "condominium_id",
  //le indico que mi foreignKey de la tabla Towers esta enlazada a esta (Condos) a traves del id de Condos
  sourceKey: "id",
});

//a tower belongs to Condominium
Tower.belongsTo(Condos, {
  as: "condominium",
  foreignKey: "condominium_id",
  targetKey: "id",
});

Tower.hasMany(Department, {
  as: "departments",
  foreignKey: "tower_id",
  sourceKey: "id",
});

Department.belongsTo(Tower, {
  as: "tower",
  foreignKey: "tower_id",
  targetKey: "id",
});

Department.hasMany(User, {
  as: "user",
  foreignKey: "departament_id",
  sourceKey: "id",
});

User.belongsTo(Department, {
  as: "departments",
  foreignKey: "departament_id",
  targetKey: "id",
});

//turnos
User.hasMany(Shift, {
  as: "shift",
  foreignKey: "user_id",
  sourceKey: "id",
});

Shift.belongsTo(User, {
  as: "user",
  foreignKey: "user_id",
  targetKey: "id",
});

User.hasMany(Comment, {
  as: "comment",
  foreignKey: "user_id",
  sourceKey: "id",
});

Comment.belongsTo(User, {
  as: "user",
  foreignKey: "user_id",
  targetKey: "id",
});

Condos.hasMany(Social_space, {
  as: "social_space",
  foreignKey: "condominium_id",
  sourceKey: "id",
});

Social_space.belongsTo(Condos, {
  as: "condominium",
  foreignKey: "condominium_id",
  targetKey: "id",
});

Social_space.hasMany(Shift, {
  as: "shift",
  foreignKey: "social_space_id",
  sourceKey: "id",
});

Shift.belongsTo(Social_space, {
  as: "social_space",
  foreignKey: "social_space_id",
  targetKey: "id",
});

User.hasMany(Response, {
  as: "response",
  foreignKey: "user_id",
  sourceKey: "id",
});

Response.belongsTo(User, {
  as: "user",
  foreignKey: "user_id",
  targetKey: "id",
});

Comment.belongsToMany(Response, {
  foreignKey: "comment_id",
  targetKey: "id",
  through: "comments_responses",
});

Response.belongsToMany(Comment, {
  foreignKey: "response_id",
  targetKey: "id",
  through: "comments_responses",
});

Roles.belongsToMany(User, {
  through: "user_Roles",
  forenKey: "role_id",
  otherKey: "userId",
});
User.belongsToMany(Roles, {
  through: "user_Roles",
  forenKey: "user_id",
  otherKey: "roleId",
});

ROLES = ["user", "admin"];

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};

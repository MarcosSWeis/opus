const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    departament_id: {
      type: DataTypes.INTEGER,      
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cel:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dni: {
      type: DataTypes.BIGINT,
    },
    image:{
      type: DataTypes.TEXT,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },


    resetToken:{
      type:DataTypes.STRING
   },
   resetTokenExpires: { type: DataTypes.DATE },


   passwordReset: { type: DataTypes.DATE },
  });
};

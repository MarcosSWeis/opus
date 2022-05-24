const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    departament_id:{

      type: DataTypes.INTEGER,
    },
  
    firt_name: {
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
    dni:{
      type:DataTypes.INTEGER
    },

    isAdmin:{

      type:DataTypes.BOOLEAN,
    }
  });
};

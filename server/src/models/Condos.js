const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("condos", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    condominium_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street_1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street_2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.ARRAY(DataTypes.TEXT),
    }
  });
};

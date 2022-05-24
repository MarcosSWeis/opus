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
  });
};

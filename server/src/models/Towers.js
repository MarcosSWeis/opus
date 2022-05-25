const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("tower", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tower_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    condominium_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    all_departments: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    elevators: {
      type: DataTypes.INTEGER,
    },
    all_floors: {
      type: DataTypes.INTEGER,
    },
  });
};

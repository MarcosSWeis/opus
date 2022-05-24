const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("department", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    toilets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,

    },
    sale: {
      type: DataTypes.FLOAT,
    },
    rent: {
      type: DataTypes.FLOAT,
    }
  });
};
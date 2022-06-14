const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("shift", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    social_space_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    initial_hour: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    end_hour: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amountPeople: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  });
};

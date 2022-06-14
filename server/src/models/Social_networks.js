const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Social_network",
    {
      instagram: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      facebook: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

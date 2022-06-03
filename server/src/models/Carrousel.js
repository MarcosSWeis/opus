const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "carrousel",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
          type: DataTypes.ARRAY(DataTypes.TEXT),
      },
    },
    {
      timestamp: true,
    }
  );
};
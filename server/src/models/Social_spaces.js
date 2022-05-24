const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("social_space", {
    space: {
      type: DataTypes.STRING,
    },
    condominium_id: {
      type: DataTypes.INTEGER,
    },
  });
};

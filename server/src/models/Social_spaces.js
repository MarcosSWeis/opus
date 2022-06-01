const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("social_space", {
    space: {
      type: DataTypes.STRING,
    },
    images:{
        type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    description:{
      type: DataTypes.TEXT,
    },
    condominium_id: {
      type: DataTypes.INTEGER,
    },
  });
};

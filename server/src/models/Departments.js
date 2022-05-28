const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("department", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tower_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Number:{
      type: DataTypes.INTEGER,
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
    onsale: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    measure:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
    },
    image:{
      type: DataTypes.ARRAY(DataTypes.TEXT),
    }
  },
  {
    timestamps: false,
  }
  );
};
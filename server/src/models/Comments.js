const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

sequelize.define('comments', {

userId: {

type:DataTypes.INTEGER,

},

comment:{
    type:DataTypes.STRING,
    allowNull:false,

},

file:{
    type:DataTypes.STRING,
},
file:{

    type:DataTypes.STRING,
},
photo:{

    type:DataTypes.STRING,
}






})

{timestamp:true}

}
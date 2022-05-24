const {DataTypes} = require('sequelize');



module.exports = (sequelize) => {

sequelize.define('social_spaces', {


space:{

    type:DataTypes.STRING,
    
},
condos_id:{
    type:DataTypes.INTEGER,
}




} )

}
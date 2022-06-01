const { Tower} = require("../db");
const {TowersLoad} = require("../datamock/Towers.js");

const loadTowers = async () => {
  try {
    await Promise.all(TowersLoad.map( async (tower) =>{ 
    await Tower.create(tower)  
    }))
   
  } catch (error) {
    console.log (error);
  }
};

module.exports = {
  loadTowers,
}
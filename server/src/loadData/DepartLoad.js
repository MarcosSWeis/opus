const { Department } = require("../db");
const {DepartsLoad} = require("../datamock/Departs.js");

const loadDepart = async () => {
  try {
    await Promise.all(DepartsLoad.map( async (depart) =>{ 
    await Department.create(depart)  
    }))
   
  } catch (error) {
    console.log (error);
  }
};

module.exports = {
  loadDepart,
}
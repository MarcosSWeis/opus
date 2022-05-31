const { Router } = require("express");
const { Op } = require("sequelize");
const {Department, User, Tower} = require ("../db")

const router = Router();

/* router.get ("/onsale", async (req, res) => {
  try {
    const departOnsale = await Department.findAll({
      where: {
        onsale: true,
      },  
      include: {model: User, as:"user" , attributes: ["first_name", "last_name", "email", "cel"]},
    });

    res.json (departOnsale)
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los departamentos",
      error,
    });
  }
}); */

router.get ("/all",async (req, res)=>{
  try {
    const departAll = await Department.findAll({
      include:[{model: User, as: "user", attributes: ["first_name", "last_name", "email", "cel"],},
      {model: Tower, as:"tower" , attributes: ["tower_name","elevators"]}],
    });
    res.json (departAll)

  }catch (err){
    res.status(500).json({
      message: "Error al obtener los departamentos",
      err,
    });
  }
})

router.get ("/filter", async (req, res)=>{
  const filters={
    onsale:true
  };
  req.body.toilets?filters.toilets=req.body.toilets:null;
  req.body.rooms?filters.rooms=req.body.rooms:null;
  req.body.floor?filters.floor=req.body.floor:null;
  req.body.price?filters.price={[Op.between]:req.body.price}:null;
  req.body.size?filters.size={[Op.between]:req.body.size}:null;
  try {
    const departOnsale = await Department.findAll(
      {
      where: filters,  
      include: {model: User, as:"user" , attributes: ["first_name", "last_name", "email", "cel"]},
    });

    res.json (departOnsale)
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los departamentos",
      error,
    });
  }



})


module.exports = router;

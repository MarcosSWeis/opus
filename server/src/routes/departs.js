const { Router } = require("express");
const { Op } = require("sequelize");
const departaments = require("../controllers/departaments-controllers");
const { Department, User, Tower } = require("../db");
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
router.get("/detail_departament", departaments.departementDetail);

router.get("/all", async (req, res) => {
  try {
    const departAll = await Department.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["first_name", "last_name", "email", "cel"],
        },
        { model: Tower, as: "tower", attributes: ["tower_name", "elevators"] },
      ],
    });
    res.json(departAll);
  } catch (err) {
    res.status(500).json({
      message: "Error al obtener los departamentos",
      err,
    });
  }
});

router.get("/filter", async (req, res) => {
  const filters = {
    onsale: true,
  };
  console.log(req.query);
  const limit = 10;
  const page = req.query.page - 1;
  console.log(page, "page");
  const offset = page * limit;
  req.query.toilets ? (filters.toilets = req.query.toilets) : null;
  req.query.rooms ? (filters.rooms = req.query.rooms) : null;
  req.query.floor ? (filters.floor = req.query.floor) : null;
  //req.query.price tiene que ser un array
  req.query.price ? (filters.price = { [Op.between]: req.query.price }) : null;
  //req.query.size  tiene que ser un array
  req.query.size ? (filters.measure = { [Op.between]: req.query.size }) : null;
  try {
    const { count, rows } = await Department.findAndCountAll({
      where: filters,
      include: {
        model: User,
        as: "user",
        attributes: ["first_name", "last_name", "email", "cel"],
      },
      offset: offset,
      limit: limit,
      distinct: true,
    });
    let ok;
    let status;
    let statusText;
    if (rows.length !== 0) {
      ok = true;
      status = 200;
      statusText = "OK";
    } else {
      ok = false;
      status = 404;
      statusText = "No se encontro departamento con esas caracteristicas";
    }
    const response = {
      meta: {
        ok: ok,
        status: status,
        statusText: statusText,
        total: count,
        url: "http://localhost:5040/departs/filter",
      },
      data: rows,
    };

    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al obtener los departamentos",
      error,
    });
  }
});

router.get ( "/towers" , async (req,res)=>{
  try{
    let towers= await Tower.findAll({
      attributes: ["tower_name"]
    })
    res.status(200).json(towers)

  }catch (err){
    console.log(err);
    res.send(400).json({err});
  }
})
module.exports = router;

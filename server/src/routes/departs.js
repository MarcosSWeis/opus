const { Router } = require("express");
const {Department, User} = require ("../db")

const router = Router();

router.get ("/onsale", async (req, res) => {
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
});




module.exports = router;

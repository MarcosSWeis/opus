const { Router } = require("express");


const router = Router();

router.get ("/onsale", async (req, res) => {
  try {
    const departOnsale = await Department.findAll({
      include: {model:User, attributes: ['first_name', 'last_name', 'email', '']},
      where: {
        onsale: true,
    }
    
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los departamentos",
      error,
    });
  }
});




module.exports = router;

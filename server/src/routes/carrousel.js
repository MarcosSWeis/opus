const { Router } = require("express");
const { Carrousel } = require("../db");

const router = Router();

router.get ("/", async (req, res) => {

  try{
    
    console.log ("entro a carrousel")
    const carrousel = await Carrousel.findAll()
  
    res.json (carrousel)

  }catch (err){
    res.status(500).json(err);
  }
  
})

module.exports = router;
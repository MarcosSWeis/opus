const { Router } = require("express");
const { Carrousel, Social_space } = require("../db");

const router = Router();

router.get ("/", async (req, res) => {

  try{
    
    const carrousel = await Carrousel.findAll()
  
    res.json (carrousel)

  }catch (err){
    res.status(500).json(err);
  }
  
})


router.get ("/body" , async (req, res)=>{
  try{
    const images = await Social_space.findAll({
      attributes: ["images" , "space"]
    })
    res.status(200).json(images)
  }catch(err){
    res.status(500).json(err);
  }
})

module.exports = router;
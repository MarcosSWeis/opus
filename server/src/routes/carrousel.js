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
      attributes: ["images" , "space"],
      order: [["id", "ASC"]]
    })
    res.status(200).json(images)

  }catch(err){
    res.status(500).json(err);
  }
})

router.put ("/", async (req, res) => {
  try{
    const data= req.body
    const update= await Carrousel.update(data,{
      where: {
        id: 1
      },
      returning: true,
    });
    res.status(200).send(update);
  }catch (err){
    console.log (err)
    res.status(500).json(err);
  }
})

router.put ("/body", async (req, res) => {
  try{
    const data= req.body
    const update= await Social_space.update(data,{
      where: {
        space: data.space
      },
      returning: true,
    });
    res.status(200).send(update);
  }catch (err){
    console.log (err)
    res.status(500).json(err);
  }
})

module.exports = router;
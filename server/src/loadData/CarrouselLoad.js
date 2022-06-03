const { Carrousel } = require("../db");

const carrousel = {
  title:"Bienvenidos a Opus",
  description:"Lugar único para vivir",
  images:["https://res.cloudinary.com/jair1020/image/upload/t_No-Country/v1654227963/No-Country/Carrousel/2_lmneid.jpg","https://res.cloudinary.com/jair1020/image/upload/t_No-Country/v1654227955/No-Country/Carrousel/3_y3mlm4.jpg","https://res.cloudinary.com/jair1020/image/upload/v1654227950/No-Country/Carrousel/1_quvrhb.png" ]
}

const loadCarrousel = async () => {
  try {
    await Carrousel.create(carrousel);
  } catch (error) {
    console.log (error);
  }
};

module.exports = {
  loadCarrousel,
}
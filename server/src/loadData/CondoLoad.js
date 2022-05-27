const { Condos } = require("./db.js");

const loadCarousel = async () => {
  try {
    await Condos.Create({condominium_name:"No-contry"});
  } catch (error) {
    return error;
  }
};

module.exports = {
  loadCarousel,
}
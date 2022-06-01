const { Condos } = require("../db");

const condo = {
  condominium_name:"No-contry",
  street_1:"Av siempre viva",
  street_2:"Cll 123",
}

const loadCondo = async () => {
  try {
    await Condos.create(condo);
  } catch (error) {
    console.log (error);
  }
};

module.exports = {
  loadCondo,
}
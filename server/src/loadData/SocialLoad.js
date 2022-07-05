const { Social_network } = require("../db");

const data = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  email: "opus@email.com"
}

const loadSocial = async () => {
  try {
    await Social_network.create(data)
  } catch (error) {
    console.log (error);
  }
}

module.exports = {
  loadSocial,
}
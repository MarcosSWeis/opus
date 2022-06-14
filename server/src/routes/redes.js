const {Router} = require('express');
const {Social_network} = require('../db');
const router = Router();

router.get ("/", async (req, res) => {
  const redes = await Social_network.findAll();
  res.json (redes)
})

router.put ("/", async (req, res) => {
  try {
    const response = await Social_network.update(req.body, {
      where: {
        id: 1,
      },
      returning: true,
    });
    res.status(200).send(response);
  } catch (err) {
    console.log (err);
    res.status(500).send(err);
  }
})


module.exports = router;
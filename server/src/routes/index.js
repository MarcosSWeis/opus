const { Router } = require('express');
const userRoutes = require('./users');

const router = Router();



/* Telling the router to use the userRoutes file when the url is /users. */
router.use('/users', userRoutes);


module.exports = router;

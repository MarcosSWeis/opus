const { Router } = require('express');
const userRoutes = require('./users');
const departsRoutes = require('./departs');
const carrouselRoutes = require('./carrousel');

const router = Router();



/* Telling the router to use the userRoutes file when the url is /users. */
router.use('/users', userRoutes);
router.use('/departs', departsRoutes);
router.use ('/carrousel', carrouselRoutes);


module.exports = router;

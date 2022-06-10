const { Router } = require("express");
const bookingsControllers = require("../controllers/bookings-controllers");
const router = Router();

router.get("/", bookingsControllers.getBookingForThisDay);
router.get("/social_space", bookingsControllers.getSocialSpace);

module.exports = router;

const { Shift } = require("../db");
const bookings = require("../datamock/bookings");

module.exports = {
  loadBookings: async () => {
    try {
      await Promise.all(
        bookings.map((booking) => {
          Shift.create(booking);
        })
      );
    } catch (error) {
      console.log(error);
    }
  },
};

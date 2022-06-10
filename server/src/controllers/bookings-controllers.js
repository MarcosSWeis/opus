const { Social_space, Shift, User, conn } = require("../db");

const { structureApiRestFindAll } = require("../helpers/structure-api-rest");
const sequelize = require("sequelize");

const Op = sequelize.Op;
module.exports = {
  getBookingForThisDay: async (req, res, next) => {
    try {
      const { query } = req;
      //si de la query no viene nada err
      console.log(query);
      if (Object.keys(query).length == 0 || Object.keys(query).length == 1) {
        res.status(500).json({
          msj: "Debe ingresar un dia y un espacio social",
        });
      }
      const results = await Shift.findAll({
        where: {
          [Op.and]: [
            sequelize.where(conn.cast(conn.col("createdAt"), "varchar"), {
              [Op.like]: "%" + query.bookingDate + "%",
            }),
            sequelize.where(
              sequelize.col("social_space_id"),
              query.selectedSpace
            ),
          ],
        },
      });
      // },
      // include: [
      //   {
      //     model: User,
      //     as: "user",
      //     attributes: ["first_name", "last_name"],
      //   },
      //   {
      //     model: Social_space,
      //     as: "social_space",
      //     attributes: ["space"],
      //   },
      //  ],
      // );
      const errorStatusText = "error interno del servido";
      const errorStatusCode = 500;
      const response = structureApiRestFindAll(
        results,
        errorStatusText,
        errorStatusCode
      );
      console.log(results);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  },
  getSocialSpace: async (req, res, next) => {
    try {
      const socialSpace = await Social_space.findAll({
        raw: true,
      });
      const statusText = "error del servidor";
      const errStatusCode = 500;
      const response = structureApiRestFindAll(
        socialSpace,
        statusText,
        errStatusCode
      );
      res.json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error al obtener los espacios sociales",
        error,
      });
    }
  },
};

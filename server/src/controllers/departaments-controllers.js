const { Department } = require("../db");
const { structureApiRestFindAll } = require("../helpers/structure-api-rest");
module.exports = {
  departementDetail: async (req, res) => {
    try {
      const { query } = req;
      console.log(query, 1212122121);
      const departament = await Department.findOne({
        where: {
          id: query.id,
        },
      });
      res.status(200).json(departament);
    } catch (err) {
      console.log(err);
      res.status(500).json("Error al cargar departamento");
    }
  },
};

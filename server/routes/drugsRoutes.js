const { drugsController } = require("../controllers");
const drugsRoutes = require("express").Router();

drugsRoutes.get("/", drugsController.getAllDrugs);
drugsRoutes.post("/", drugsController.addDrug);

module.exports = drugsRoutes;

const drugsRoutes = require("express").Router();
const { drugsController } = require("../controllers");
const { validateBody } = require("../middlewares");
const { drugBodySchema } = require("../schemas");

drugsRoutes.get("/", drugsController.getAllDrugs);
drugsRoutes.post("/", validateBody(drugBodySchema), drugsController.addDrug);

module.exports = drugsRoutes;

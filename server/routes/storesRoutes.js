const { storesController } = require("../controllers");
const storesRoutes = require("express").Router();

storesRoutes.get("/", storesController.getAllStores);
storesRoutes.post("/", storesController.addStore);

module.exports = storesRoutes;

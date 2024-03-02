const storesRoutes = require("express").Router();
const { storesController } = require("../controllers");
const { validateBody } = require("../middlewares");
const { storeBodySchema } = require("../schemas");

storesRoutes.get("/", storesController.getAllStores);
storesRoutes.post(
  "/",
  validateBody(storeBodySchema),
  storesController.addStore
);

module.exports = storesRoutes;

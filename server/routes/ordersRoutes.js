const ordersRoutes = require("express").Router();
const { ordersController } = require("../controllers");
const { validateBody } = require("../middlewares");
const { orderBodySchema } = require("../schemas");

ordersRoutes.get("/", ordersController.getAllOrders);
// ordersRoutes.get("/:id", ordersController.getOneOrder);
ordersRoutes.post(
  "/",
  validateBody(orderBodySchema),
  ordersController.addOrder
);

module.exports = ordersRoutes;

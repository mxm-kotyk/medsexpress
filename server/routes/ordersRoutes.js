const { ordersController } = require("../controllers");
const ordersRoutes = require("express").Router();

ordersRoutes.get("/", ordersController.getAllOrders);
// ordersRoutes.get("/:id", ordersController.getOneOrder);
ordersRoutes.post("/", ordersController.addOrder);

module.exports = ordersRoutes;

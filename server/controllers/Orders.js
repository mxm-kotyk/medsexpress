const { OrderModel } = require("../models");
const asyncHandler = require("express-async-handler");

class Orders {
  getAllOrders = asyncHandler(async (req, res) => {
    const orders = await OrderModel.find({});
    res.status(200);
    res.json({
      code: 200,
      message: "Success",
      data: orders,
      quantity: orders.length,
    });
  });

  addOrder = asyncHandler(async (req, res) => {
    const order = await OrderModel.create({ ...req.body });
    res.status(201);
    res.json({ code: 201, message: "Success", data: order });
  });
}

module.exports = new Orders();

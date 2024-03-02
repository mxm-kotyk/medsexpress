const { StoreModel } = require("../models");
const asyncHandler = require("express-async-handler");

class Stores {
  getAllStores = asyncHandler(async (req, res) => {
    const stores = await StoreModel.find({});
    res.status(200);
    res.json({
      code: 200,
      message: "Success",
      data: stores,
      quantity: stores.length,
    });
  });

  addStore = asyncHandler(async (req, res) => {
    const { name, address } = req.body;
    if (!name || !address) {
      res.status(400);
      throw new Error("Provide all required fields");
    }

    const store = await StoreModel.create({ ...req.body });
    res.status(201);
    res.json({ code: 201, message: "Success", data: store });
  });
}

module.exports = new Stores();

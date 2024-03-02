const { DrugModel } = require("../models");
const asyncHandler = require("express-async-handler");

class Drugs {
  getAllDrugs = asyncHandler(async (req, res) => {
    const drugs = await DrugModel.find({});
    res.status(200);
    res.json({
      code: 200,
      message: "Success",
      data: drugs,
      quantity: drugs.length,
    });
  });

  addDrug = asyncHandler(async (req, res) => {
    const { name, price, store } = req.body;
    if (!name || !price || !store) {
      res.status(400);
      throw new Error("Provide all required fields");
    }

    const drug = await DrugModel.create({ ...req.body });
    res.status(201);
    res.json({ code: 201, message: "Success", data: drug });
  });
}

module.exports = new Drugs();

const { Schema, model } = require("mongoose");

const storeSchema = new Schema(
  {
    name: { type: String, required: [true, "DB: name is required."] },
    address: { type: String, required: [true, "DB: address is required."] },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("store", storeSchema);

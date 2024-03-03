const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    name: { type: String, required: [true, "DB: name is required."] },
    email: { type: String, required: [true, "DB: email is required."] },
    phone: { type: String, required: [true, "DB: phone is required."] },
    address: { type: String, required: [true, "DB: address is required."] },
    items: [
      {
        itemName: String,
        price: Number,
        quantity: { type: Number, min: 1 },
        store: String,
        _id: { type: Schema.Types.ObjectId, ref: "drug", required: true },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("order", orderSchema);

const { Schema, model } = require("mongoose");

// const orderItemSchema = new Schema({
//   itemName: { type: String, required: [true, "DB: itemName is required."] },
//   quantity: {
//     type: Number,
//     min: 1,
//     required: [true, "DB: quantity is required."],
//   },
// });

const orderSchema = new Schema(
  {
    name: { type: String, required: [true, "DB: name is required."] },
    email: { type: String, required: [true, "DB: email is required."] },
    phone: { type: String, required: [true, "DB: phone is required."] },
    address: { type: String, required: [true, "DB: address is required."] },
    items: [
      {
        itemName: String,
        quantity: { type: Number, min: 1 },
        _id: { type: Schema.Types.ObjectId, ref: "drug", required: true },
      },
    ],
    // items: {
    //   type: [orderItemSchema],
    //   required: [true, "DB: items can't be empty."],
    // },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("order", orderSchema);

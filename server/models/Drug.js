const { Schema, model } = require("mongoose");

const drugSchema = new Schema(
  {
    name: { type: String, required: [true, "DB: name is required."] },
    price: { type: Number, required: [true, "DB: price is required"] },
    store: {
      type: Schema.Types.ObjectId,
      ref: "store",
      required: [true, "DB: store is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("drug", drugSchema);

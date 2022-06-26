const mongoose = require("mongoose");
const cartSchema = mongoose.Schema(
  {
    idUser: {
      type: String,
    },
    idProduct: {
      type: String,
    },
    idColor: {
      type: String,
    },
    product: {
      type: Object,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", cartSchema);

const mongoose = require("mongoose");
const QuantitySchema = new mongoose.Schema(
  {
    smartphone: {
      type: Number,
      default: 0,
    },
    laptop: {
      type: Number,
      default: 0,
    },
    accessory: {
      type: Number,
      default: 0,
    },
    swatch: {
      type: Number,
      default: 0,
    },
    tablet: {
      type: Number,
      default: 0,
    },
    pc: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("quantity", QuantitySchema);

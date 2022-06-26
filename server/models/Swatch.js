const mongoose = require("mongoose");
const swatchSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      default: "swatch",
    },
    name: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    idVideo: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
      enum: ["apple", "samsung", "xiaomi", "oppo"],
    },
  },
  {
    timestamps: true,
  }
);

swatchSchema.index({ name: "text" });

const Swatch = mongoose.model("Swatch", swatchSchema);

Swatch.createIndexes({ name: "text" });

module.exports = Swatch;

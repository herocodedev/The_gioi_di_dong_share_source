const mongoose = require("mongoose");
const tabletSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      default: "tablet",
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
    brand: {
      type: String,
      required: true,
      enum: ["ipad", "samsung", "lenovo", "xiaomi", "nokia", "huawei"],
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["ipad", "android"],
    },
    performance: {
      type: String,
      required: true,
      enum: ["playGame", "hotPin", "speedPin"],
    },
    ram: {
      type: Number,
      required: true,
      enum: [2, 3, 4, 6, 8, 12],
    },
    storage: {
      type: Number,
      required: true,
      enum: [8, 16, 32, 64, 128, 256, 512, 1024, 2048],
    },
  },
  {
    timestamps: true,
  }
);

tabletSchema.index({ name: "text" });

const Tablet = mongoose.model("Tablet", tabletSchema);

Tablet.createIndexes({ name: "text" });

module.exports = Tablet;

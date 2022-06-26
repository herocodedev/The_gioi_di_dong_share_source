const mongoose = require("mongoose");
const pcSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      default: "pc",
    },
    name: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      default: [],
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
      enum: ["apple", "hp", "asus", "lenovo"],
    },
    price: {
      type: Number,
      required: true,
    },
    screen: {
      type: String,
      required: true,
    },
    ram: {
      type: Number,
      required: true,
      enum: [8, 16, 32],
    },
    operateSys: {
      type: String,
      required: true,
    },
    storage: {
      type: Number,
      required: true,
      enum: [256, 512, 1024],
    },
  },
  {
    timestamps: true,
  }
);

pcSchema.index({ name: "text" });

const PC = mongoose.model("PC", pcSchema);

PC.createIndexes({ name: "text" });

module.exports = PC;

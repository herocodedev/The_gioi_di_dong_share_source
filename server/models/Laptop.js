const mongoose = require("mongoose");
const laptopSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      default: "laptop",
    },
    name: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },

    description: {
      type: String,
    },
    brand: {
      type: String,
      required: true,
      enum: ["macbook", "asus", "hp", "lenovo", "acer", "dell", "msi", "lg"],
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: [
        "hotDeal",
        "gamming",
        "macbook",
        "office",
        "code",
        "thin",
        "luxurious",
      ],
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
    idVideo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

laptopSchema.index({ name: "text" });

const Laptop = mongoose.model("laptop", laptopSchema);

Laptop.createIndexes({ name: "text" });

module.exports = Laptop;

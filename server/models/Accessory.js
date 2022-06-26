const mongoose = require("mongoose");
const accessorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      default: "accessory",
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
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: [
        "backupCharger", // Sạc dự phòng
        "chargingCable", // Cáp sạc
        "appleAccessory", // phụ kiện apple
        "mouse", // chuột
        "keyboard", // bàn phím
      ],
    },
    idVideo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

accessorySchema.index({ name: "text" });

const Accessory = mongoose.model("Accessory", accessorySchema);

Accessory.createIndexes({ name: "text" });

module.exports = Accessory;

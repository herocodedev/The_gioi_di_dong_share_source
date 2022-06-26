const mongoose = require("mongoose");
const smartPhoneSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      default: "smartphone",
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
      enum: ["iphone", "samsung", "oppo", "vivo", "xiaomi", "nokia"],
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["iphone", "android", "normal"],
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
      enum: [8, 16, 32, 64, 128, 256],
    },
    camera: {
      type: String,
      required: true,
      enum: [
        "cameraCloseUpShot",
        "cameraRemoveFonts",
        "cameraZoom",
        "cameraWideShot",
      ],
    },
  },
  {
    timestamps: true,
  }
);
smartPhoneSchema.index({ name: "text" });

const SmartPhone = mongoose.model("SmartPhone", smartPhoneSchema);

SmartPhone.createIndexes({ name: "text" });
module.exports = SmartPhone;

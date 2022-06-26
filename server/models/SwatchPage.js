const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const swatchPageSchema = new mongoose.Schema(
  {
    titleEvents: {
      type: String,
    },
    productSwatchEvents: {
      type: Array,
    },
    sliders: {
      type: Array,
    },
    bannerSwatch: {
      type: Array,
    },
    productSwatchs: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("swatchPage", swatchPageSchema);

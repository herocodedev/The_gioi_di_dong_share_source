const mongoose = require("mongoose");
const laptopPageSchema = mongoose.Schema(
  {
    titleEvents: {
      type: String,
    },
    productLaptopEvents: {
      type: Array,
    },
    sliders: {
      type: Array,
    },
    bannerLaptopGaming: {
      type: Array,
    },
    productLaptopGamings: {
      type: Array,
    },
    bannerLaptopMac: {
      type: Array,
    },
    productLaptopMacs: {
      type: Array,
    },
    bannerLaptopOffice: {
      type: Array,
    },
    productLaptopOffices: {
      type: Array,
    },
    bannerLaptopCode: {
      type: Array,
    },
    productLaptopCodes: {
      type: Array,
    },
    bannerLaptopThin: {
      type: Array,
    },
    productLaptopThins: {
      type: Array,
    },
    bannerLaptopLuxurious: {
      type: Array,
    },
    productLaptopLuxurious: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("laptopPage", laptopPageSchema);

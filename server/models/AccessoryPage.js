const mongoose = require("mongoose");
const accessoryPageSchema = mongoose.Schema(
  {
    sliders: {
      type: Array,
    },
    bannerEvents: {
      type: Array,
    },
    productAccessoryEvents: {
      type: Array,
    },
    bannerAppleAccessory: {
      type: Array,
    },
    productAppleAccessorys: {
      type: Array,
    },
    bannerCharingCable: {
      type: Array,
    },
    productCharingCables: {
      type: Array,
    },
    bannerBackupCharger: {
      type: Array,
    },
    productBackupChargers: {
      type: Array,
    },
    bannerAccessoryGaming: {
      type: Array,
    },
    productAccessoryGamings: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("accessoryPage", accessoryPageSchema);

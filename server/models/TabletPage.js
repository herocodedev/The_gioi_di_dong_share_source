const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const tabletPageSchema = new mongoose.Schema(
  {
    sliders: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tabletPage", tabletPageSchema);

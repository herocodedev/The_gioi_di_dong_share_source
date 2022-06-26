const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const pcPageSchema = new mongoose.Schema(
  {
    sliders: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("pcPage", pcPageSchema);

const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const smartphonePageSchema = new mongoose.Schema(
  {
    sliders: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("smartphonePage", smartphonePageSchema);

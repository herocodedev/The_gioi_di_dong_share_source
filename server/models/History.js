const mongoose = require("mongoose");
const historySchema = mongoose.Schema(
  {
    sign: {
      type: Boolean,
      default: false,
    },
    idUser: {
      type: String,
      require,
    },
    name: {
      type: String,
      require,
    },
    address: {
      type: String,
      require,
    },

    gender: {
      type: String,
      require,
    },
    phone: {
      type: String,
      require,
    },
    carts: {
      type: Array,
      require,
    },
    totalPrice: {
      type: Number,
      require,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("history", historySchema);

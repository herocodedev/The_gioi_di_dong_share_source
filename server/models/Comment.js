const mongoose = require("mongoose");
const commentSchema = mongoose.Schema(
  {
    idUser: {
      type: String,
      require,
    },
    idProduct: {
      type: String,
      require,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    category: {
      type: String,
      require,
    },
    comment: {
      type: String,
    },
    star: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("comment", commentSchema);

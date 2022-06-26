const Quantity = require("../models/Quantity");

const quantityControllers = {
  // Get length documents
  getQuantityAllProducts: async (req, res, next) => {
    try {
      const result = await Quantity.find({});
      return res.status(200).json({
        success: true,
        result,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  },
};

module.exports = quantityControllers;

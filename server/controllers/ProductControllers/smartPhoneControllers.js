const SmartPhone = require("../../models/SmartPhone");
const APIFeatures = require("../../lib/features");
const smartphoneControllers = {
  getProduct: async (req, res) => {
    try {
      const features = new APIFeatures(SmartPhone.find(), req.query)
        .searching()
        .sorting()
        .filtering(); // New Giống như tạo một lớp mới
      const products = await features.query;
      return res.status(200).json({
        success: true,
        products,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Server error!",
      });
    }
  },
};

module.exports = smartphoneControllers;

const Quantity = require("../models/Quantity");
const cloudinary = require("cloudinary");

const uploadFileController = {
  // Handle front end
  // uploadImgToCloud: async (req, res, next) => {},
  deleteImgFromCloud: async (req, res) => {
    const { public_id } = req.body;
    try {
      const result = await cloudinary.uploader.destroy(public_id);
      return res.status(200).json({
        success: true,
        message: "Xóa hình ảnh thành công",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        message: "Server error",
      });
    }
  },
};
module.exports = uploadFileController;

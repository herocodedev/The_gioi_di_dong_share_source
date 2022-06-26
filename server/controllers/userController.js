const User = require("../models/User");

const userControllers = {
  // Get All Users
  getAllUsers: async (req, res, next) => {
    try {
      const users = await User.find().select("-password");

      return res.status(200).json({
        success: true,
        users,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // Delete user
  deleteUser: async (req, res, next) => {
    const { id } = req.params;
    try {
      const userDelete = await User.findOneAndDelete({ _id: id });
      return res.status(200).json({
        success: true,
        message: "Xóa thành công",
        user: userDelete,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = userControllers;

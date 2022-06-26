const Comment = require("../models/Comment");
const APIFeatures = require("../lib/features");

const commentControllers = {
  getComment: async (req, res) => {
    const { idProduct } = req.query;

    try {
      const features = new APIFeatures(Comment.find({ idProduct }), req.query)
        .sorting()
        .paginating();
      const featureCount = new APIFeatures(
        Comment.find({ idProduct }),
        req.query
      ).counting();
      const result = await features.query;
      const total = await featureCount.query;

      return res.status(200).json({
        success: true,
        comments: result,
        total,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Server error!",
      });
    }
  },
  postComment: async (req, res) => {
    try {
      const newComment = new Comment(req.body);
      const cmt = await newComment.save();
      return res.status(200).json({
        success: true,
        message: "Đánh giá thành công",
        comment: cmt,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Server error!",
      });
    }
  },

  editComment: async (req, res) => {
    const { id } = req.params;
    const dataUpdate = req.body;

    try {
      const comment = await Comment.findOneAndUpdate({ _id: id }, dataUpdate, {
        new: true,
      });
      return res.status(200).json({
        success: true,
        message: "Sửa thành công",
        comment,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Server error!",
      });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const { id } = req.params;
      await Comment.findOneAndDelete({ _id: id });
      return res.status(200).json({
        success: true,
        message: "Xóa thành công",
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

module.exports = commentControllers;

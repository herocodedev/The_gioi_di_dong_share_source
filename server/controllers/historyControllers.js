const History = require("../models/History");
const APIFeatures = require("../lib/features");

const historyControllers = {
  getAllHistory: async (req, res) => {
    try {
      const page = req.query.page * 1 || 1;
      const limit = 5;
      const skip = limit * (page - 1);
      let result = await History.find({})
        .limit(limit)
        .skip(skip)
        .sort("-createdAt");
      let total = await History.find({}).count();
      return res.status(200).json({
        success: true,
        message: "Lấy tất cả đơn hàng thành công",
        histories: result,
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

  getHistorySign: async (req, res) => {
    try {
      const page = req.query.page * 1 || 1;
      const limit = 5;
      const skip = limit * (page - 1);
      let result = await History.find({ sign: true }).limit(limit).skip(skip);
      let total = await History.find({ sign: true }).count();
      return res.status(200).json({
        success: true,
        message: "Lấy tất cả đơn hàng đã xác nhận thành công",
        histories: result,
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

  getHistoryNoSign: async (req, res) => {
    try {
      const page = req.query.page * 1 || 1;
      const limit = 5;
      const skip = limit * (page - 1);
      let result = await History.find({ sign: false }).limit(limit).skip(skip);
      let total = await History.find({ sign: false }).count();
      return res.status(200).json({
        success: true,
        message: "Lấy tất cả đơn hàng chưa xác nhận thành công",
        histories: result,
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
  getHistory: async (req, res) => {
    const { idUser } = req.params;
    try {
      const page = req.query.page * 1 || 1;
      const limit = 5;
      const skip = limit * (page - 1);

      const featureCount = new APIFeatures(
        History.find({ idUser }),
        req.query
      ).counting();

      const result = await History.find({ idUser })
        .limit(limit)
        .skip(skip)
        .sort("-createdAt");
      const total = await featureCount.query;
      return res.status(200).json({
        success: true,
        history: result,
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

  addHistory: async (req, res) => {
    try {
      let newHistory = new History(req.body);
      history = await newHistory.save();
      return res.status(200).json({
        success: true,
        message: "Thêm đơn hàng thành công",
        history,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Server error!",
      });
    }
  },

  editHistory: async (req, res) => {
    const { id } = req.params;

    try {
      const newData = await History.findOneAndUpdate(
        { _id: id },
        { sign: true },
        {
          new: true,
        }
      );

      return res.status(200).json({
        success: true,
        message: "Cập nhật đơn hàng thành công",
        history: newData,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Server error!",
      });
    }
  },

  deleteHistory: async (req, res) => {
    const { id } = req.params;
    try {
      const newData = await History.findOneAndDelete({ _id: id });
      return res.status(200).json({
        success: true,
        message: "Xóa đơn hàng thành công",
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

module.exports = historyControllers;

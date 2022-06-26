const pageGeneralControllers = {
  getAll: (Model) => {
    return async (req, res) => {
      try {
        const result = await Model.find({});
        return res.status(200).json({
          success: true,
          result,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Server error!",
        });
      }
    };
  },
  addPage: (Model) => {
    return async (req, res, next) => {
      try {
        const newPage = new Model(req.body);
        const nPage = await newPage.save();

        return res.status(200).json({
          success: true,
          message: "Thêm thành công",
          result: nPage,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Server error!",
        });
      }
    };
  },
  editPage: (Model) => {
    return async (req, res) => {
      const { id } = req.params;
      try {
        const result = await Model.findOneAndUpdate({ _id: id }, req.body, {
          new: true,
        });
        return res.status(200).json({
          success: true,
          message: "Cập nhật thành công",
          result,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Server error!",
        });
      }
    };
  },

  deletePage: (Model) => {
    return async (req, res) => {
      const { id } = req.params;
      try {
        const result = await Model.findOneAndDelete({ _id: id });
        return res.status(200).json({
          success: true,
          message: "Xóa thành công",
          result,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Server error!",
        });
      }
    };
  },
};

module.exports = pageGeneralControllers;

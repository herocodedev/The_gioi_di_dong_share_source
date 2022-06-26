const Quantity = require("../models/Quantity");
const APIFeatures = require("../lib/features");

const productGeneralController = {
  getAll: (Model) => {
    return async (req, res) => {
      // Paginate
      const features = new APIFeatures(Model.find(), req.query).paginating();
      try {
        const result = await Promise.allSettled([
          features.query,
          Model.countDocuments(), //count number of products.
        ]);

        return res.status(200).json({
          success: true,
          product: result[0].value,
          total: result[1].value,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Server error!",
        });
      }
    };
  },

  getDetail: (Model) => {
    return async (req, res) => {
      const { id } = req.params;
      try {
        const product = await Model.findById(id);

        return res.status(200).json({
          success: true,
          product,
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          success: false,
          message: "Không tìm thấy sản phẩm",
        });
      }
    };
  },
  editProduct: (Model) => {
    return async (req, res) => {
      const { id } = req.params;
      const dataUpdate = req.body;
      try {
        const product = await Model.findOneAndUpdate({ _id: id }, dataUpdate, {
          new: true,
        });

        return res.status(200).json({
          success: true,
          message: "Cập nhật sản phẩm thành công",
          product,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Server error!",
        });
      }
    };
  },

  addProduct: (Model) => {
    return async (req, res) => {
      const data = req.body;
      try {
        // Add new product
        const newProduct = new Model(data);
        const prod = await newProduct.save();

        // Save quantity product
        // ID_GLOBAL = ID_SAVE_PRODUCT_QUANTITY
        const totalPro = await Model.countDocuments({});
        await Quantity.findByIdAndUpdate(process.env.ID_SAVE_PRODUCT_QUANTITY, {
          [newProduct.category]: totalPro,
        });

        return res.status(200).json({
          success: true,
          message: "Thêm sản phẩm thành công",
          product: prod,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error!",
        });
      }
    };
  },

  deleteProduct: (Model) => {
    return async (req, res) => {
      const { id } = req.params;
      try {
        const productDelete = await Model.findOneAndDelete({ _id: id });
        const totalPro = await Model.countDocuments({});
        await Quantity.findByIdAndUpdate(process.env.ID_SAVE_PRODUCT_QUANTITY, {
          [productDelete.category]: totalPro,
        });
        return res.status(200).json({
          success: true,
          message: "Xóa thành công",
          product: productDelete,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Server error!",
        });
      }
    };
  },

  deleteAllProduct: (Model) => {
    return async (req, res) => {
      try {
        await Model.deleteMany();
        return res.status(200).json({
          success: true,
          message: "Xóa tất cả thành công",
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error!",
        });
      }
    };
  },

  searchRecommendProduct: (Model) => {
    return async (req, res) => {
      // Find according by word
      let { name } = req.query;
      let keyword = new RegExp(name, "i"); // Query and don't care accented words
      try {
        const product = await Model.find({
          $or: [
            {
              name: { $regex: keyword },
            },
          ],
        }).limit(4);
        return res.status(200).json({
          success: true,
          product,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error!",
        });
      }
    };
  },

  searchProduct: (Model) => {
    return async (req, res) => {
      try {
        let featureSearchPaginate;
        let featureSearchCount;
        if (!req.query.search) {
          featureSearchPaginate = new APIFeatures(Model.find(), req.query)
            .paginating()
            .sorting();
          featureSearchCount = new APIFeatures(
            Model.find(),
            req.query
          ).counting();
        } else {
          featureSearchPaginate = new APIFeatures(Model.find(), req.query)
            .searching()
            .sorting()
            .paginating();
          featureSearchCount = new APIFeatures(Model.find(), req.query)
            .searching()
            .counting();
        }
        const product = await featureSearchPaginate.query;
        const total = await featureSearchCount.query;
        return res.status(200).json({
          success: true,
          product,
          total,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error!",
        });
      }
    };
  },

  filterProduct: (Model) => {
    return async (req, res) => {
      try {
        const featureFilterPaginate = new APIFeatures(Model.find(), req.query)
          .filtering()
          .sorting()
          .paginating();
        const featureFilterCount = new APIFeatures(Model.find(), req.query)
          .filtering()
          .counting();

        const product = await featureFilterPaginate.query;
        const total = await featureFilterCount.query;

        return res.status(200).json({
          success: true,
          product,
          total,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: "Server error!",
        });
      }
    };
  },
};
module.exports = productGeneralController;

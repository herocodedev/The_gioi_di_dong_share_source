const Cart = require("../models/Cart");
const APIFeatures = require("../lib/features");

const cartControllers = {
  getCart: async (req, res) => {
    const { idUser } = req.params;
    try {
      const features = new APIFeatures(Cart.find({ idUser }), req.query);
      const result = await features.query;

      let quantity = 0;
      result.forEach((item, index) => (quantity += item.quantity));
      return res.status(200).json({
        success: true,
        carts: result,
        total: quantity,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Server error!",
      });
    }
  },

  addToCart: async (req, res) => {
    const { idUser, idProduct, idColor } = req.body;
    try {
      let product;
      let pro;
      // Check exist => update data
      pro = await Cart.findOne({ idUser, idProduct, idColor });

      if (pro) {
        let newData = {
          ...pro._doc,
          quantity: pro.quantity + req.body.quantity,
        };

        pro = await Cart.findOneAndUpdate(
          { idUser, idProduct, idColor },
          newData,
          { new: true }
        );
      } else {
        product = new Cart(req.body);
        pro = await product.save();
      }

      return res.status(200).json({
        success: true,
        message: "Thêm vào giõ hàng thành công",
        cart: pro,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Server error!",
      });
    }
  },

  editToCart: async (req, res) => {
    const { id } = req.params;
    try {
      const newData = await Cart.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });

      return res.status(200).json({
        success: true,
        message: "Cập nhật giõ hàng thành công",
        cart: newData,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Server error!",
      });
    }
  },

  deleteToCart: async (req, res) => {
    const { id } = req.params;
    try {
      const newData = await Cart.findOneAndDelete({ _id: id });
      return res.status(200).json({
        success: true,
        message: "Xóa sản phẩm thành công",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Server error!",
      });
    }
  },

  deleteCart: async (req, res) => {
    const { idUser } = req.params;
    try {
      await Cart.deleteMany({ idUser });
      return res.status(200).json({
        success: true,
        message: "Xóa sản phẩm thành công",
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

module.exports = cartControllers;

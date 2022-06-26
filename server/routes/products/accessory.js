const productGeneralController = require("../../controllers/productGeneralController");
const { middlewareController } = require("../../middlewares/validateToken");
const router = require("express").Router();
const Accessory = require("../../models/Accessory");

router.get("/", productGeneralController.getAll(Accessory));
router.get(
  "/searchRecommend",
  productGeneralController.searchRecommendProduct(Accessory)
);

router.get("/feature", productGeneralController.searchProduct(Accessory));
router.get("/filter", productGeneralController.filterProduct(Accessory));

router.post(
  "/",
  middlewareController.verifyTokenAdmin,
  productGeneralController.addProduct(Accessory)
);
router.put(
  "/:id",
  middlewareController.verifyTokenAdmin,
  productGeneralController.editProduct(Accessory)
);

router.delete(
  "/deleteAll",
  middlewareController.verifyTokenAdmin,
  productGeneralController.deleteAllProduct(Accessory)
);

router.get("/:id", productGeneralController.getDetail(Accessory));

router.delete(
  "/:id",
  middlewareController.verifyTokenAdmin,
  productGeneralController.deleteProduct(Accessory)
);

module.exports = router;

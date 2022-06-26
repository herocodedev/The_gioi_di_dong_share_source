const productGeneralController = require("../../controllers/productGeneralController");
const { middlewareController } = require("../../middlewares/validateToken");
const router = require("express").Router();
const Swatch = require("../../models/Swatch");
router.get("/", productGeneralController.getAll(Swatch));

router.get(
  "/searchRecommend",
  productGeneralController.searchRecommendProduct(Swatch)
);

router.get("/feature", productGeneralController.searchProduct(Swatch));
router.get("/filter", productGeneralController.filterProduct(Swatch));

router.post(
  "/",
  middlewareController.verifyTokenAdmin,
  productGeneralController.addProduct(Swatch)
);
router.put(
  "/:id",
  middlewareController.verifyTokenAdmin,
  productGeneralController.editProduct(Swatch)
);

router.delete(
  "/deleteAll",
  middlewareController.verifyTokenAdmin,
  productGeneralController.deleteAllProduct(Swatch)
);

router.get("/:id", productGeneralController.getDetail(Swatch));

router.delete(
  "/:id",
  middlewareController.verifyTokenAdmin,
  productGeneralController.deleteProduct(Swatch)
);

module.exports = router;

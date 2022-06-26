const productGeneralController = require("../../controllers/productGeneralController");
const { middlewareController } = require("../../middlewares/validateToken");
const router = require("express").Router();
const Tablet = require("../../models/tablet");
router.get("/", productGeneralController.getAll(Tablet));
router.get(
  "/searchRecommend",
  productGeneralController.searchRecommendProduct(Tablet)
);

router.get("/feature", productGeneralController.searchProduct(Tablet));
router.get("/filter", productGeneralController.filterProduct(Tablet));

router.post(
  "/",
  middlewareController.verifyTokenAdmin,
  productGeneralController.addProduct(Tablet)
);
router.put(
  "/:id",
  middlewareController.verifyTokenAdmin,
  productGeneralController.editProduct(Tablet)
);

router.delete(
  "/deleteAll",
  middlewareController.verifyTokenAdmin,
  productGeneralController.deleteAllProduct(Tablet)
);

router.get("/:id", productGeneralController.getDetail(Tablet));

router.delete(
  "/:id",
  middlewareController.verifyTokenAdmin,
  productGeneralController.deleteProduct(Tablet)
);

module.exports = router;

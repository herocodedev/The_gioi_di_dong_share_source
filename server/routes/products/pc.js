const productGeneralController = require("../../controllers/productGeneralController");
const { middlewareController } = require("../../middlewares/validateToken");
const router = require("express").Router();
const PC = require("../../models/PC");
router.get("/", productGeneralController.getAll(PC));
router.get(
  "/searchRecommend",
  productGeneralController.searchRecommendProduct(PC)
);

router.get("/feature", productGeneralController.searchProduct(PC));
router.get("/filter", productGeneralController.filterProduct(PC));

router.post(
  "/",
  middlewareController.verifyTokenAdmin,
  productGeneralController.addProduct(PC)
);
router.put(
  "/:id",
  middlewareController.verifyTokenAdmin,
  productGeneralController.editProduct(PC)
);

router.delete(
  "/deleteAll",
  middlewareController.verifyTokenAdmin,
  productGeneralController.deleteAllProduct(PC)
);

router.get("/:id", productGeneralController.getDetail(PC));

router.delete(
  "/:id",
  middlewareController.verifyTokenAdmin,
  productGeneralController.deleteProduct(PC)
);

module.exports = router;

const smartphoneControllers = require("../../controllers/ProductControllers/smartPhoneControllers");
const productGeneralController = require("../../controllers/productGeneralController");
const { middlewareController } = require("../../middlewares/validateToken");
const router = require("express").Router();
const SmartPhone = require("../../models/SmartPhone");
router.get("/", productGeneralController.getAll(SmartPhone));
router.get(
  "/searchRecommend",
  productGeneralController.searchRecommendProduct(SmartPhone)
);

router.get("/feature", productGeneralController.searchProduct(SmartPhone));
router.get("/filter", productGeneralController.filterProduct(SmartPhone));

router.post(
  "/",
  middlewareController.verifyTokenAdmin,
  productGeneralController.addProduct(SmartPhone)
);
router.put(
  "/:id",
  middlewareController.verifyTokenAdmin,
  productGeneralController.editProduct(SmartPhone)
);
router.delete(
  "/deleteAll",
  middlewareController.verifyTokenAdmin,
  productGeneralController.deleteAllProduct(SmartPhone)
);

router.get("/:id", productGeneralController.getDetail(SmartPhone));

router.delete(
  "/:id",
  middlewareController.verifyTokenAdmin,
  productGeneralController.deleteProduct(SmartPhone)
);

module.exports = router;

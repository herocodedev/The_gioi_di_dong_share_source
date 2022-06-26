const productGeneralController = require("../../controllers/productGeneralController");
const { middlewareController } = require("../../middlewares/validateToken");
const router = require("express").Router();
const Laptop = require("../../models/Laptop");
router.get("/", productGeneralController.getAll(Laptop));
router.get(
  "/searchRecommend",
  productGeneralController.searchRecommendProduct(Laptop)
);

router.get("/feature", productGeneralController.searchProduct(Laptop));
router.get("/filter", productGeneralController.filterProduct(Laptop));

router.post(
  "/",
  middlewareController.verifyTokenAdmin,
  productGeneralController.addProduct(Laptop)
);
router.put(
  "/:id",
  middlewareController.verifyTokenAdmin,
  productGeneralController.editProduct(Laptop)
);

router.delete(
  "/deleteAll",
  middlewareController.verifyTokenAdmin,
  productGeneralController.deleteAllProduct(Laptop)
);

router.get("/:id", productGeneralController.getDetail(Laptop));

router.delete(
  "/:id",
  middlewareController.verifyTokenAdmin,
  productGeneralController.deleteProduct(Laptop)
);

module.exports = router;

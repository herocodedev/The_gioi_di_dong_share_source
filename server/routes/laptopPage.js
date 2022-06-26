const pageGeneralControllers = require("../controllers/pageGeneralControllers");
const { middlewareController } = require("../middlewares/validateToken");
const LaptopPage = require("../models/LaptopPage");

const router = require("express").Router();

router.get("/", pageGeneralControllers.getAll(LaptopPage));

router.post(
  "/",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.addPage(LaptopPage)
);

router.put(
  "/:id",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.editPage(LaptopPage)
);

router.get(
  "/:id",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.deletePage(LaptopPage)
);

module.exports = router;

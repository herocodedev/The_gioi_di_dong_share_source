const pageGeneralControllers = require("../controllers/pageGeneralControllers");
const { middlewareController } = require("../middlewares/validateToken");
const AccessoryPage = require("../models/AccessoryPage");

const router = require("express").Router();

router.get("/", pageGeneralControllers.getAll(AccessoryPage));

router.post(
  "/",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.addPage(AccessoryPage)
);

router.put(
  "/:id",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.editPage(AccessoryPage)
);

router.get(
  "/:id",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.deletePage(AccessoryPage)
);

module.exports = router;

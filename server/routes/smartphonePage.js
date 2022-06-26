const pageGeneralControllers = require("../controllers/pageGeneralControllers");
const { middlewareController } = require("../middlewares/validateToken");
const SmartphonePage = require("../models/SmartphonePage");

const router = require("express").Router();

router.get("/", pageGeneralControllers.getAll(SmartphonePage));

router.post(
  "/",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.addPage(SmartphonePage)
);

router.put(
  "/:id",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.editPage(SmartphonePage)
);

router.get(
  "/:id",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.deletePage(SmartphonePage)
);

module.exports = router;

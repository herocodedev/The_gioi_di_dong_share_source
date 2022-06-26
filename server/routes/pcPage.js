const pageGeneralControllers = require("../controllers/pageGeneralControllers");
const { middlewareController } = require("../middlewares/validateToken");
const PCPage = require("../models/PCPage");

const router = require("express").Router();

router.get("/", pageGeneralControllers.getAll(PCPage));

router.post(
  "/",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.addPage(PCPage)
);

router.put(
  "/:id",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.editPage(PCPage)
);

router.get(
  "/:id",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.deletePage(PCPage)
);

module.exports = router;

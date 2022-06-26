const pageGeneralControllers = require("../controllers/pageGeneralControllers");
const { middlewareController } = require("../middlewares/validateToken");
const HomePage = require("../models/HomePage");

const router = require("express").Router();

router.get("/", pageGeneralControllers.getAll(HomePage));

router.post(
  "/",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.addPage(HomePage)
);

router.put(
  "/:id",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.editPage(HomePage)
);

router.get(
  "/:id",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.deletePage(HomePage)
);

module.exports = router;

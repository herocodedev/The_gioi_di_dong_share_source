const pageGeneralControllers = require("../controllers/pageGeneralControllers");
const { middlewareController } = require("../middlewares/validateToken");
const SwatchPage = require("../models/SwatchPage");

const router = require("express").Router();

router.get("/", pageGeneralControllers.getAll(SwatchPage));

router.post(
  "/",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.addPage(SwatchPage)
);

router.put(
  "/:id",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.editPage(SwatchPage)
);

router.get(
  "/:id",
  middlewareController.verifyTokenAdmin,
  pageGeneralControllers.deletePage(SwatchPage)
);

module.exports = router;

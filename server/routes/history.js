const historyControllers = require("../controllers/historyControllers");
const { middlewareController } = require("../middlewares/validateToken");

const router = require("express").Router();
router.get(
  "/",
  middlewareController.verifyTokenAdmin,
  historyControllers.getAllHistory
);

router.get(
  "/sign",
  middlewareController.verifyTokenAdmin,
  historyControllers.getHistorySign
);

router.get(
  "/noSign",
  middlewareController.verifyTokenAdmin,
  historyControllers.getHistoryNoSign
);

router.post(
  "/",
  middlewareController.verifyToken,
  historyControllers.addHistory
);
router.get(
  "/:idUser",
  middlewareController.verifyToken,
  historyControllers.getHistory
);

router.put(
  "/:id",
  middlewareController.verifyTokenAdmin,
  historyControllers.editHistory
);
router.delete(
  "/:id",
  middlewareController.verifyToken,
  historyControllers.deleteHistory
);

module.exports = router;

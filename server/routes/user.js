const userControllers = require("../controllers/userController");
const { middlewareController } = require("../middlewares/validateToken");

const router = require("express").Router();

// Get all users
router.get(
  "/",
  middlewareController.verifyTokenAdmin,
  userControllers.getAllUsers
);

router.delete(
  "/:id",
  middlewareController.verifyTokenAdmin,
  userControllers.deleteUser
);

module.exports = router;

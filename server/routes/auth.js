const authControllers = require("../controllers/authControllers");
const { middlewareController } = require("../middlewares/validateToken");

const router = require("express").Router();

router.get("/", middlewareController.verifyToken, authControllers.checkLogin);
router.post("/register", authControllers.register);
router.post("/login", authControllers.login);
router.post("/refresh", authControllers.refreshToken);
router.post(
  "/logout",
  middlewareController.verifyToken,
  authControllers.logout
);

module.exports = router;

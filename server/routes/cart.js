const {
  getCart,
  addToCart,
  editToCart,
  deleteToCart,
  deleteCart,
} = require("../controllers/cartControllers");
const { middlewareController } = require("../middlewares/validateToken");

const router = require("express").Router();
router.post("/", middlewareController.verifyToken, addToCart);
router.get("/:idUser", middlewareController.verifyToken, getCart);
router.put("/:id", middlewareController.verifyToken, editToCart);
router.delete(
  "/deleteCart/:idUser",
  middlewareController.verifyToken,
  deleteCart
);
router.delete("/:id", middlewareController.verifyToken, deleteToCart);

module.exports = router;

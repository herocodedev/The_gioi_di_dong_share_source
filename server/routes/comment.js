const commentControllers = require("../controllers/commentControllers");
const { middlewareController } = require("../middlewares/validateToken");

const router = require("express").Router();
router.get("/", commentControllers.getComment);
router.post(
  "/",
  middlewareController.verifyToken,
  commentControllers.postComment
);

router.put(
  "/:id",
  middlewareController.verifyToken,
  commentControllers.editComment
);

router.delete(
  "/:id",
  middlewareController.verifyToken,
  commentControllers.deleteComment
);
module.exports = router;

const uploadFileController = require("../controllers/uploadFileController");
const { middlewareController } = require("../middlewares/validateToken");

const router = require("express").Router();

router.post(
  "/",
  middlewareController.verifyTokenAdmin,
  uploadFileController.deleteImgFromCloud
);

module.exports = router;

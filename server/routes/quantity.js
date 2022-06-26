const quantityControllers = require("../controllers/quantityControllers");

const router = require("express").Router();

// Get all users
router.get("/", quantityControllers.getQuantityAllProducts);

module.exports = router;

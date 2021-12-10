const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controllers/productController");
const { updateProducts } = require("../controllers/shoppingController");

// const {uploadProductImage} = require('../controllers/uploadController')

router.route("/").get(getAllProducts).put(updateProducts)
// router.route('/uploads').post(uploadProductImage)

module.exports = router;

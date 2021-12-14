const express = require("express");
const { getAllProducts } = require("../controllers/productController");
const { updateProducts } = require("../controllers/shoppingController");


const { uploadProductImage, addProduct } = require("../controllers/uploadController");
const router = express.Router();


router.route('/').post(addProduct).get(getAllProducts).put(updateProducts)
router.route('/uploadPicture').post(uploadProductImage)

module.exports = router;
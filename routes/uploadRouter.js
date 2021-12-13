const express = require("express");
const { getAllProducts } = require("../controllers/productController");


const { uploadProductImage, addProduct } = require("../controllers/uploadController");
const router = express.Router();


router.route('/').post(addProduct).get(getAllProducts)
router.route('/uploadPicture').post(uploadProductImage)

module.exports = router;
const express = require("express");


const { uploadProductImage, addProduct } = require("../controllers/uploadController");
const router = express.Router();


router.route('/').post(addProduct)
router.route('/uploadPicture').post(uploadProductImage)

module.exports = router;
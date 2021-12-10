const express = require("express");
const { getAllCart, getSingleCart, updateProducts } = require("../controllers/shoppingController");

const router = express.Router();

router.route("/").get(getAllCart)
router.route("/:id").get(getSingleCart).put(updateProducts)

module.exports = router;
const Product = require("../models/Product")

const updateProducts = async (req,res) => {
    res.send("Update the shop")
}

const getAllCart = async (req,res) => {
    res.send("get all cart")
}

const getSingleCart = async (req,res) => {
    res.send("gets one item from cart")
}
module.exports = {updateProducts, getAllCart, getSingleCart};
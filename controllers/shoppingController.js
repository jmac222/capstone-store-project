const Product = require("../models/Product")

const updateProducts = async (req,res) => {
   
    const {id, quantity, price} = req.body
    console.log(id, quantity, price);
    
    const output = await Product.findByIdAndUpdate(id, {quantity: quantity, price: price})
    console.log(output);
    res.json({output})
}

const getAllCart = async (req,res) => {
    res.send("get all cart")
}

const getSingleCart = async (req,res) => {
    res.send("gets one item from cart")
}
module.exports = {updateProducts, getAllCart, getSingleCart};
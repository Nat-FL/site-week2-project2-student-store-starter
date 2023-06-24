const express = require("express")
// const {getAllProducts} = require("../models/store")
const {getAllProducts} = require("../models/Store.js") //imports fucntion so function can be called when specific route is requested/input
const {getProduct} = require("../models/Store.js")
const router = express.Router()

router.get("/", async (req,res)=>{
    const products = getAllProducts();
    res.status(200).json({products})

})

router.get("/:productId", async(req, res)=>{
    const id = req.params.productId //gets id that user puts into browser
    const productDetail = getProduct(id) 
    res.status(200).json(productDetail)
})

module.exports = router

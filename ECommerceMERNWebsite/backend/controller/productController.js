const Product=require('../model/productModel');
const asyncHandler=require('express-async-handler');

//@desc     Fetch all product from DB
//@route    GET /api/product
//@access   Public
const getProducts= asyncHandler (async (req,res)=>{
    const products=await Product.find({});
    res.json(products);
})

const getProductById= asyncHandler (async (req,res)=>{
    const product=await Product.findById({_id:req.params.id.toString()});
    if(product){
        res.json(product);
    }
    else{
        res.status(404).json({message:'Product Not found'})
    }
})

module.exports={getProducts,getProductById}
const Product = require("../models/Schema");

const createProduct=async(req,res) => {
    try {
        const product = await  Product.create(req.body);

        res.status(201).json(product);
    }catch(error) {
        res.status(500).json({message:error.message});
    }

};

const getAllProducts = async(req,res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    }catch(error) {
        res.status(500).json({message:error.message});
    }
};

const getByProductID = async(req,res) => {
    try {
        const product = await Product.findOne({productId:req.params.productId});

        if(!product) {
            res.status(404).json({message:"Product not found"});
        } else {
            res.status(200).json(product);

        }
    } catch(error) {
        res.status(500).json({message:error.message});
    }
};

const updateProduct= async(req,res) => {
    try {
        const product= await Product.findOneAndUpdate({productId:req.params.productId},req.body,{new:true});
        if(!product) {
            res.status(404).json({message:"Product not found"});
        } else {
            res.status(200).json(product);
        }
    } catch(error) {
        res.status(500).json({message:error.message});
    }
};

const deleteProduct = async(req,res) => {
    try {       
        const product = await Product.findOneAndDelete({productId:req.params.productId});
        if(!product) {
            res.status(404).json({message:"Product not found"});    
        } else {
            res.status(200).json({message:"Product deleted successfully"});
        }
    } catch(error) {
        res.status(500).json({message:error.message});
    }       
};

module.exports = {
    createProduct,
    getAllProducts,
    getByProductID,
    updateProduct,
    deleteProduct
}
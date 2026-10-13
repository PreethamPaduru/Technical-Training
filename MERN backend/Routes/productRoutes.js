const express=require("express")

const router=express.Router();


const {createProduct,
    getAllProducts,
    getByProductID,
    updateProduct,
    deleteProduct} = require("../controllers/productController");

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:productId", getByProductID);
router.put("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;
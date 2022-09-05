const router=require("express").Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middleware/verifyToken");
const productController = require("../controllers/productController");

// add new product
router.put('/new',verifyTokenAndAdmin,productController.newProduct)

module.exports=router
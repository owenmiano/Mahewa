const router=require("express").Router();
// const path = require('path');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middleware/verifyToken");
const productController = require("../controllers/productController");
const multer=require('multer')

// define storage for the images
const storage=multer.diskStorage({
    // destination for files
    destination:function(req,file,callback){
        callback(null, 'uploads')
    },
    // add back the extension
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

// upload paramters for multer
const upload = multer({
    storage:storage,
    limits: {
        fieldSize: 1024 * 1024 * 3,
      },
})

// add new product
router.post('/new', verifyTokenAndAdmin,upload.single('image'),productController.newProduct)

// Update product
router.put('/update/:id', verifyTokenAndAdmin,upload.single('image'),productController.updateProduct)

// Delete product
router.delete('/delete/:id', verifyTokenAndAdmin,productController.deleteProduct)


// Find product
router.get('/find/:id',productController.findProduct)

// Find All product
router.get('/',productController.findAllProducts)

module.exports=router
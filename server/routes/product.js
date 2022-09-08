const router=require("express").Router();
const path = require('path');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middleware/verifyToken");
const productController = require("../controllers/productController");
const multer=require('multer')

// define storage for the images
const storage=multer.diskStorage({
    // destination for files
    destination:function(request,file,callback){
        callback(null, path.join(__dirname,'../uploads/images'))
    },
    // add back the extension
    filename:function(request,file,callback){
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
router.get('/find/:id', verifyTokenAndAuthorization,productController.findProduct)

// Find All product
router.get('/', verifyTokenAndAuthorization,productController.findAllProducts)

module.exports=router
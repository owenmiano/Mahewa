const router=require('express').Router()
const adminController=require('../controllers/adminController')
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

// Register admin
router.post('/register',verifyTokenAndAdmin,adminController.registerAdmin)

// Register admin
router.post('/login',adminController.loginAdmin)

module.exports=router;
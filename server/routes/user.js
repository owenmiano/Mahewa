const router=require("express").Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middleware/verifyToken");
const userController = require("../controllers/userController");


// Update User Profile
router.put('/updateProfile/:id',verifyTokenAndAuthorization,userController.updateProfile)

// Delete User Profile
router.delete('/deleteProfile/:id',verifyTokenAndAuthorization,userController.deleteProfile)

// Delete User Profile
router.get('/findProfile/:id',verifyTokenAndAdmin,userController.findProfile)

// Get all users 
router.get('/',verifyTokenAndAdmin,userController.findAllProfiles)

// Get users stats 
router.get('/stats',verifyTokenAndAdmin,userController.userStats)
module.exports=router;
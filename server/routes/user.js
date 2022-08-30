const router=require("express").Router();
const { verifyTokenAndAuthorization } = require("../middleware/verifyToken");
const userController = require("../controllers/userController");


// Update User Profile
router.put('/updateProfile/:id',verifyTokenAndAuthorization,userController.updateProfile)

module.exports=router;
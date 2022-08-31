const router=require("express").Router();
const {check}=require("express-validator")
const authController=require('../controllers/authController')

// Users Registration Route
router.post("/register-user",[
  check("email","Please provide a valid email").isEmail(),
  check("password","Please provide a password that is greater than 5 characters").isLength({
      min:6
  }),
  check("userName","UserName field is required").contains(),
  check("phoneNo","PhoneNumber is required").contains(),
],authController.registerUser)

// Users Login Route
router.post("/login-user",[
  check("email","Please provide a valid email").isEmail(),
  check("password","Please provide a password that is greater than 5 characters").isLength({
      min:6
  }),
],authController.loginUser)


module.exports=router
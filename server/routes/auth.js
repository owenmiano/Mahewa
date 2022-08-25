const router=require("express").router;
const {check,validationResult}=require("express-validator")
const bcrypt=require("bcrypt")
const Users=require('../models/User');


// User Registration Route
router.post('/register-user',[
    check("email","Please provide a valid email").isEmail(),
    check("password","Please provide a password that is greater than 5 characters").isLength({
        min:6
    }),
    check("username","First Name field is required").exists(),
    check("lastName","Last Name field is required").isNumeric,
],(req,res)=>{
//  validate user
const errors=validationResult(req)
if(!errors.isEmpty()){
    return res.status(400).json({
      errors:errors.array()
    })
 }
 const {password,email,userName,phoneNo}=req.body
 // validate email
 const emailExist=await Users.findOne({email});
 if(emailExist){
   return  res.status(400).json({
         errors:[
             {
                 "message":"This user already exists"
             }
         ]
         
     })
 }

 //    Get the hashed Password
const  hashedPassword=await bcrypt.hash(password,10)
try {
      const newUser= await Users.create({
        userName,
        phoneNo,
        email,
        password:hashedPassword
      })
     return res.status(201).json({message:`Hurray! you have registered successfully.`})
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({
        errors:[
          {
              "message":"Unable to create your account"
          }
      ]
      })
    }



})


// Admin Registration Route
router.post('/register-user',[
    check("email","Please provide a valid email").isEmail(),
    check("password","Please provide a password that is greater than 5 characters").isLength({
        min:6
    }),
    check("username","First Name field is required").exists(),
    check("lastName","Last Name field is required").isNumeric,
],(req,res)=>{
//  validate user
const errors=validationResult(req)
if(!errors.isEmpty()){
    return res.status(400).json({
      errors:errors.array()
    })
 }
 const {password,email,userName,phoneNo}=req.body
 // validate email
 const emailExist=await Users.findOne({email});
 if(emailExist){
   return  res.status(400).json({
         errors:[
             {
                 "message":"This user already exists"
             }
         ]
         
     })
 }

 //    Get the hashed Password
const  hashedPassword=await bcrypt.hash(password,10)
try {
      const newUser= await Users.create({
        userName,
        phoneNo,
        email,
        password:hashedPassword
      })
     return res.status(201).json({message:`Hurray! you have registered successfully.`})
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({
        errors:[
          {
              "message":"Unable to create your account"
          }
      ]
      })
    }



})



module.exports=router;
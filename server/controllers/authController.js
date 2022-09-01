const {validationResult}=require("express-validator")
const bcrypt=require("bcrypt")
const Users=require('../models/User');
const  JWT =require('jsonwebtoken')


// User Registration Route
exports.registerUser=async(req,res)=>{
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
      const token=await JWT.sign({
        id:Users._id,
        isAdmin:Users.isAdmin,
    },
        process.env.TOKEN_SECRET,{
        expiresIn:360000
      })
     
      res.cookie("token",token,{
        httpOnly:true
      })

      const {password,...others}=newUser._doc

     return res.status(201).json({message:`Hurray! you have registered successfully.`,...others,token})
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



}


// User Login Route
exports.loginUser=async(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
            return res.status(400).json({
              errors:errors.array()
            })
         }
  
   // first check if the email exists in the database
   try {
    const user=await Users.findOne({email:req.body.email})
    if(!user){
        return res.status(404).json({
            errors:[
              {
                  "msg":"Invalid login credentials"
              }
          ]
          })
    }
 
    // that means user is existing and trying to sign in from the right portal
     // check for password
     let isMatch=await bcrypt.compare(req.body.password,user.password);
     // if password is incorrect
     if(!isMatch){
         return  res.status(403).json({
               errors:[
                   {
                       "msg":"Incorrect password"
                   }
               ]
               
           })
         }
     // if password is correct
     const token=await JWT.sign({
       id:user._id,
       isAdmin:user.isAdmin,
   },
       process.env.TOKEN_SECRET,{
       expiresIn:360000
     })
     res.cookie("token",token,{
      httpOnly:true
    })
     const {password,...others}=user._doc

     return res.status(200).json({message:"Hurray! You are now logged in",...others,token})
   } catch (error) {
    console.log(error.message)
      return res.status(500).json({
        errors:[
          {
              "message":"Unable to Login to your account"
          }
      ]
      })
   }
  
    
}

// Logout User
exports.logout=(req,res)=>{
    try {
      res.clearCookie("token")
     return res.json({message:"You have signed out successfully"})
    } catch (error) {
      console.log(error.message)
        return res.status(500).json({
        errors:[
          {
              "message":"Unable to sign out of your account"
          }
      ]
      })
    }

}
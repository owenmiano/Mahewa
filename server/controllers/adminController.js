const bcrypt=require("bcrypt")
const Users=require('../models/User');
const  JWT =require('jsonwebtoken')

// Add an admin
exports.registerAdmin=async(req,res)=>{
const {password,email,userName,phoneNo}=req.body
const emailExist=await Users.findOne({email});

 if(emailExist){
    return res.status(403).json({"message":"This user already exists"})

 }
 //    Get the hashed Password
 const  hashedPassword=await bcrypt.hash(password,10)
 try {
       const newUser= await Users.create({
         userName,
         phoneNo,
         email,
         isAdmin:true,
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
 
      return res.status(201).json({message:`Admin account created successfully!`,...others,token})
     } catch (error) {
       console.log(error.message)
       return res.status(500).json({"message":"Unable to create your account"})

     }
}

// Login to the admin portal
exports.loginAdmin=async(req,res)=>{

try {
    // const checkAdmin=await Users.findOne({isAdmin: true})
    // if(checkAdmin){
    //  return res.status(403).json("You are not authorised to access this portal!")
    // }
    const user=await Users.findOne({email:req.body.email,isAdmin:true})
    if(!user){
        return res.status(403).json({"message":"You are not authorised to access this portal!"})

    }
 
    // that means user is existing and trying to sign in from the right portal
     // check for password
     let isMatch=await bcrypt.compare(req.body.password,user.password);
     // if password is incorrect
     if(!isMatch){
        return res.status(403).json({"message":"Incorrect Password"})

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
      return res.status(500).json({"message":"Unable to Login to your account"})
   }
  
}   
const bcrypt=require("bcrypt")
const Users=require('../models/User');

// updated user
exports.updateProfile=async(req,res)=>{
    if(req.body.password){
        req.body.password=await bcrypt.hash( req.body.password,10)
       }
   try {
    const updatedUser=await Users.findByIdAndUpdate(req.params.id,{ 
        $set:req.body
    },{new:true})
   const {password,...others}=updatedUser._doc
    return res.status(200).json({message:"Profile has been updated successfully",...others})
   } catch (error) {
    console.log(error.message)
    return res.status(500).json({message:'Unable to update your profile'})
   }
}

// Delete user
exports.deleteProfile=async(req,res)=>{
    try {
        await Users.findByIdAndDelete(req.params.id)
        return res.status(200).json({message:"User has been deleted"})
    } catch (error) {
        console.log(error.message)
    return res.status(500).json({
      errors:[
        {
            "message":"Unable to delete account"
        }
    ]
    })
   
    }
}

// find a  user
exports.findProfile=async(req,res)=>{
    try {
      const user= await Users.findById(req.params.id)
      const {password,...others}=user._doc
        return res.status(200).json(others)
    } catch (error) {
        console.log(error.message)
    return res.status(500).json({
      errors:[
        {
            "message":"Unable to fetch user profile"
        }
    ]
    })
   
    } 
    
}

// Get all users 
exports.findAllProfiles=async(req,res)=>{
    const query=req.query.new
    try {
      const allUsers= await Users.find()
    //   const {password,...others}=allUsers._doc
        return res.status(200).json(allUsers)
    } catch (error) {
        console.log(error.message)
    return res.status(500).json({
      errors:[
        {
            "message":"Unable to fetch all user profiles"
        }
    ]
    })
   
    } 
    
}

// Get users stats
exports.userStats=async(req,res)=>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await Users.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
     console.log(error.message)
    return res.status(500).json({
      errors:[
        {
            "message":"Unable to fetch all user profiles"
        }
    ]
    })
   
    } 
}
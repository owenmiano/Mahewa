const bcrypt=require("bcrypt")
const Users=require('../models/User');

exports.updateProfile=async(req,res)=>{
    if(req.body.password){
        req.body.password=await bcrypt.hash( req.body.password,10)
       }
   try {
    const updatedUser=await user.findByIdAndUpdate(req.params.id,{ 
        $set:req.body
    },{new:true})
    const {password,...others}=updatedUser._doc
    return res.status(200).json(...others)
   } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      errors:[
        {
            "message":"Unable to update your account"
        }
    ]
    })
   }
}
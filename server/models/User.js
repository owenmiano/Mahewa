const mongoose = require('mongoose');
// Create User Schema
const userSchema=mongoose.Schema({
    
    userName:{
        type:String,
        required:true,
        unique:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        default:false
    }
},
{
    timestamps:true
})

module.exports=mongoose.model('User',userSchema)

const {Schema,model}=require('mongoose')

// Create User Schema
const userSchema=new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
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
},
{
    timestamps:true
})

const Users=model('users',userSchema)
module.exports=Users
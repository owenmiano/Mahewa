const {Schema,model}=require('mongoose')

// Create User Schema
const userSchema=new Schema({
    
    userName:{
        type:String,
        required:true,
        unique:true
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
    isAdmin:{
        type: Boolean,
        default:false
    }
},
{
    timestamps:true
})

module.exports=mongoose.model('User',productSchema)

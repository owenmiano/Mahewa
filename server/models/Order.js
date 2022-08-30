const mongoose = require('mongoose');
// Create User Schema
const cartSchema=mongoose.Schema({
    
    userId:{
        type:String,
        required:true,
    },
    products:[
        {
            productId:{
                type:String
            },
            quantity:{
                type:Number,
                default:1,
            }
        }
    ],
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"pending"}
},
{
    timestamps:true
})

module.exports=mongoose.model('Cart',cartSchema)

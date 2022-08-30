const mongoose = require('mongoose');
// Create User Schema
    const productSchema=mongoose.Schema({
    
    title:{
        type:String,
        required:true,
        unique:true

    },
    brand:{
        type:Array,
    },
    image:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    }
},
{
    timestamps:true
})

module.exports=mongoose.model('Product',productSchema)

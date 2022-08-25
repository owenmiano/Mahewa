const {Schema,model}=require('mongoose')

// Create User Schema
const cartSchema=new Schema({
    
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
    ]
},
{
    timestamps:true
})

module.exports=mongoose.model('Cart',cartSchema)

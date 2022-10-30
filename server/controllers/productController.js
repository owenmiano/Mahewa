const Product=require('../models/Product');


// add new product
exports.newProduct=async(req,res)=>{
  const {title,brand,category,desc,price}=req.body

  try {
    const newProduct=Product.create({
        title,
        brand,
        category,
        image:req.file.path,
        desc,
        price
      })
    return res.status(201).json({message:`Product ${title} has been added successfully`})
  } catch (error) {
    console.log(error.message)
      return res.status(500).json({message:'Unable to add product'})
  }
}

// Update product
exports.updateProduct=async(req,res)=>{
    try {
        const updatedProduct=await Product.findByIdAndUpdate(req.params.id,{ 
            $set:req.body
        },{new:true})
       return res.status(200).json({message:`Product has been updated successfully`})
     } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:'Unable to update product'})
    }
}


// Delete product
exports.deleteProduct=async(req,res)=>{
    try {
          const product= await Product.findByIdAndDelete(req.params.id)
          if(!product) res.status(400).json({message:"Product not found"})
        return res.status(200).json({message:"Product has been deleted successfully"})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:'Unable to delete product'})     
    }
}

// Get product
exports.findProduct=async(req,res)=>{
    try {
      const product=  await Product.findById(req.params.id)
      if(!product) res.status(400).json({message:"Product not found"})
      return res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:'Unable to find product'})     
    }
}

// // Get All products
exports.findAllProducts=async(req,res)=>{
    const qCategory=req.query.category;
    try {
        let products;
        if(qCategory){
            products=await Product.find({
                category:qCategory
            })
         }else{
            products=await Product.find()
         }


      return res.status(200).json(products)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:'Unable to find products'})     
    }
}
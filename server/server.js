const express=require('express')
const cors=require('cors')
const app =express();
const morgan =require('morgan')
require('dotenv').config()
const mongoose=require('mongoose')
const cookieParser = require('cookie-parser')
const connectDB=require('./dbConn')
const port=process.env.PORT;
const auth=require('./routes/auth')
const user=require('./routes/user')
const product=require('./routes/product')
const admin=require('./routes/admin')


// Initialize  middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/uploads',express.static('uploads'))
app.use(cors())
app.use(cookieParser());

if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'))
}

// connect Database
connectDB();

// apis
app.use('/auth',auth)
app.use('/user',user)
app.use('/product',product)
app.use('/admin',admin)




// test db connection

mongoose.connection.once('open',()=>{
    console.log(`Connected Successfully to the Database: ${mongoose.connection.name}`)
    app.listen(port,console.log(`Server is running in ${process.env.NODE_ENV} mode on port:${port}`))
})
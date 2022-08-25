const express=require('express')
const app =express();
const morgan =require('morgan')
require('dotenv').config()
const mongoose=require('mongoose')
const connectDB=require('./dbConn')
const port=process.env.PORT;

// Initialize  middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'))
}

// connect Database
connectDB();

// test db connection

mongoose.connection.once('open',()=>{
    console.log(`Connected Successfully to Database:${mongoose.connection.name}`)
    app.listen(port,console.log(`Server is running in ${process.env.NODE_ENV} mode on port:${port}`))
})
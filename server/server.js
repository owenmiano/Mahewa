const express=require('express')
const cors=require('cors')
const app =express();
const morgan =require('morgan')
require('dotenv').config()
const mongoose=require('mongoose')
const connectDB=require('./dbConn')
const port=process.env.PORT;
const auth=require('./routes/auth')
const user=require('./routes/user')


// Initialize  middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors)

if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'))
}

// connect Database
connectDB();

// apis
app.use('/auth',auth)
app.use('/user',user)




// test db connection

mongoose.connection.once('open',()=>{
    console.log(`Connected Successfully to the Database: ${mongoose.connection.name}`)
    app.listen(port,console.log(`Server is running in ${process.env.NODE_ENV} mode on port:${port}`))
})
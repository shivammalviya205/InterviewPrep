

const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://shivam:shivam143@cluster0.xd288.mongodb.net/blog' , {useUnifiedTopology: true , useNewUrlParser: true})
    
    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
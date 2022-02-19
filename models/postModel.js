const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
     title: {type:String,required:true },
     description : {type:String,required:true },
     picture:{type:String , required: false},
     username:{type:String , required: true},
     categories:{type:String , required: false},
     createDate:{type:Date }   
})

const postModel = mongoose.model('post' , postSchema)

module.exports = postModel
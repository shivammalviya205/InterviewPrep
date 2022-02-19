const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    UserName : {type:String , required: true},
    Email:{type:String, required:true},
     Password : {type:String , required: true},

})

const UserModel = mongoose.model('users' , userSchema)

module.exports = UserModel
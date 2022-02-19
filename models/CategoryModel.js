const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    categories: {
        type: String,
        required: true,
        unique:true
    }
})

const categoryModel = mongoose.model('category' , categorySchema)

module.exports = categoryModel
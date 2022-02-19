
const mongoose = require("mongoose");
const CommentModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    postId: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    }
});


const comment = mongoose.model('comment', CommentModel);


module.exports = comment;
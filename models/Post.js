const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
	author: String,
	author_id : String,
	contents: String,
	reg_date: Date,
	like: Number,
    comments: Array
});



const Post = mongoose.model('Post', postSchema);

module.exports = { Post };
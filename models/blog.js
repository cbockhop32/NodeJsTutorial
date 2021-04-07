
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }


}, {timestamps: true});


// This goes into the actual data base and searches for 'Blog' + 's' and then gets the data. The names have to be the same as how you entered it in in MongoDB atlas
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
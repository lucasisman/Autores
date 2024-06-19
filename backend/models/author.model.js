const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    quote: {
        type: String,
        required: [true, "Quote is required"],
        minlength: [3, "Quote must be at least 3 characters long"]
    }
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;

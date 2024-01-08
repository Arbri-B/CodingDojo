const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { type: String,
            minLength: [3, 'The name should be 3 characters or longer'],
            required: [true, 'The name of the author is required'] },
}, { timestamps: true }); 
module.exports = mongoose.model('Author', AuthorSchema);


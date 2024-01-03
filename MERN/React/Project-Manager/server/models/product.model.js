const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        minLength: [2, "The title should be longer than 2 characters"],
        required : true
    },
    price: { type: String,
        required : true
    },
    description : {
        type : String,
        minLength: [2, "The title should be longer than 2 characters"],
        required : true
    }
}, { timestamps: true });
module.exports = mongoose.model('Product', ProductSchema);


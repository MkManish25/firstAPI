const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "price must be provided"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    commpany: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: `{value} is not supported`,
        }, 
    },

});

module.exports = mongoose.model("Product", productSchema); 
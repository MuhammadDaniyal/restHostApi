const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    company: {
        type: String,
        enum: {
            values: ['apple', 'samsung', 'dell', 'mi'],
            message: `{VALUE} is not supported`
        },
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})

// Collection

const Product = mongoose.model('Product', productSchema)

module.exports = Product
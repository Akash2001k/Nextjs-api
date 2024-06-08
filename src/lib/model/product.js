import mongoose, { Schema, model } from 'mongoose';

// Define the product schema
const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.models.product || model('product', productSchema);

export default Product;

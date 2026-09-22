const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
        },
        category: String,
        inStock: {
            type: Boolean,
            default: true,
        },
        imageUrl: {
            type: String,
        },
    },
    {
        collection: "products",
    },
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;

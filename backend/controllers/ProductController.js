const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.json(products);
};

exports.getProductById = async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    res.json(product);
};

exports.addNewProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
};

exports.putEditedProduct = async (req, res) => {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedProduct);
};

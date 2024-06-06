const Product = require('../models/product');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.addProduct = async (req, res) => {
    const { name, price, stock } = req.body;
    try {
        const newProduct = new Product({ name, price, stock });
        await newProduct.save();
        res.json(newProduct);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

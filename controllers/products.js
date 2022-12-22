const Product = require("../models/products");

const getAllProducts = async (req, res) => {
    const myData = await Product.find({});
    res.status(200).json({ msg: " I am getAllProducts" });

};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "I am getAllProductsTesting" });
};

module.exports = { getAllProducts, getAllProductsTesting };
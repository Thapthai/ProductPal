const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products", error });
  }
};

exports.addProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      description,
      price,
      stock,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
};

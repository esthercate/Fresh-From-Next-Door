import Product from '../models/Product.js';

// ✅ Get all Products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a Product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      image,
      description,
      stock,
      category,
      dealOfTheDay = false,
      dealPrice = null,
      dealStartDate = null,
      dealEndDate = null,
      shippingCost = 0,
      tags = [],
    } = req.body;

    // Stock validation
    if (stock < 0) {
      return res.status(400).json({ message: 'Stock cannot be negative' });
    }

    // Deal validation
    if (dealOfTheDay && (!dealPrice || dealPrice >= price)) {
      return res.status(400).json({ message: 'Invalid deal price' });
    }

    const newProduct = new Product({
      name,
      price,
      image,
      description,
      stock,
      category,
      dealOfTheDay,
      dealPrice,
      dealStartDate,
      dealEndDate,
      shippingCost,
      tags,
      rating: { average: 0, count: 0 }, // Default rating
      totalSales: 0,
      isBestSeller: false,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a Product
const updateProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      image,
      description,
      stock,
      category,
      dealOfTheDay,
      dealPrice,
      dealStartDate,
      dealEndDate,
      shippingCost,
      tags,
      totalSales,
      isBestSeller,
    } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Apply updates only if provided
    product.name = name || product.name;
    product.price = price || product.price;
    product.image = image || product.image;
    product.description = description || product.description;
    product.stock = stock >= 0 ? stock : product.stock;
    product.category = category || product.category;
    product.dealOfTheDay =
      dealOfTheDay !== undefined ? dealOfTheDay : product.dealOfTheDay;
    product.dealPrice = dealPrice !== undefined ? dealPrice : product.dealPrice;
    product.dealStartDate = dealStartDate || product.dealStartDate;
    product.dealEndDate = dealEndDate || product.dealEndDate;
    product.shippingCost =
      shippingCost >= 0 ? shippingCost : product.shippingCost;
    product.tags = tags ? tags : product.tags;
    product.totalSales =
      totalSales !== undefined ? totalSales : product.totalSales;
    product.isBestSeller =
      isBestSeller !== undefined ? isBestSeller : product.isBestSeller;

    // Ensure deal price is valid
    if (
      product.dealOfTheDay &&
      (!product.dealPrice || product.dealPrice >= product.price)
    ) {
      return res.status(400).json({ message: 'Invalid deal price' });
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.deleteOne();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

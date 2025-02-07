import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price must be a positive number'],
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      min: [0, 'Stock cannot be negative'],
    },
    category: {
      type: String,
      enum: ['fruit', 'vegetable', 'dairy', 'meat', 'grain', 'other'],
      required: true,
    },
    rating: {
      average: { type: Number, default: 0, min: 0, max: 5 },
      count: { type: Number, default: 0, min: 0 },
    },
    dealOfTheDay: { type: Boolean, default: false },
    dealPrice: {
      type: Number,
      min: [0, 'Deal price must be a positive number'],
    },
    dealStartDate: { type: Date },
    dealEndDate: { type: Date },
    shippingCost: {
      type: Number,
      required: true,
      default: 0,
      min: [0, 'Shipping cost cannot be negative'],
    },
    tags: { type: [String], default: [] },
    totalSales: { type: Number, default: 0, min: 0 },
    isBestSeller: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const Product = mongoose.model('Product', ProductSchema);

export default Product;

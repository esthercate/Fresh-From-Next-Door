import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productsRoutes from './routes/productsRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows handling JSON requests

app.use('/api/products', productsRoutes);

// Load environment variables
const PORT = process.env.PORT || 5500;
const MONGO_URI = process.env.MONGO_URI;

// Database Connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((error) => console.error('MongoDB Connection Error:', error));

// Simple Route
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

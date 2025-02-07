import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import Product from './models/Product.js';
import User from './models/User.js'; // Import User model

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB if not already connected
if (mongoose.connection.readyState === 0) {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch((err) => console.error('MongoDB Connection Error:', err));
}

// 🔹 Generate Fake Users
const generateFakeUsers = async (count = 10) => {
  try {
    await User.deleteMany(); // Clear existing users
    console.log('Existing users deleted.');

    const users = [];

    for (let i = 0; i < count; i++) {
      const hashedPassword = await bcrypt.hash('password123', 10); // Hash password

      users.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: hashedPassword, // Store hashed password
      });
    }

    await User.insertMany(users);
    console.log(`${count} users inserted successfully!`);
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

// 🔹 Generate Fake Products
const generateFakeProducts = async (count = 20) => {
  try {
    await Product.deleteMany();
    console.log('Existing products deleted.');

    const products = [];

    for (let i = 0; i < count; i++) {
      const category = faker.helpers.arrayElement(['fruit', 'vegetable']);
      const name =
        category === 'fruit'
          ? faker.helpers.arrayElement([
              'Apple',
              'Banana',
              'Orange',
              'Mango',
              'Strawberry',
            ])
          : faker.helpers.arrayElement([
              'Carrot',
              'Broccoli',
              'Spinach',
              'Potato',
              'Cucumber',
            ]);
      const imageUrl =
        category === 'fruit'
          ? 'https://example.com/images/fruits.jpg'
          : 'https://example.com/images/vegetables.jpg';

      products.push({
        name,
        price: faker.number.float({ min: 1, max: 100, precision: 0.01 }),
        image: imageUrl,
        description: faker.commerce.productDescription(),
        stock: faker.number.int({ min: 1, max: 100 }),
        category,
        rating: {
          average: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
          count: faker.number.int({ min: 1, max: 200 }),
        },
        dealOfTheDay: faker.datatype.boolean(),
        shippingCost: faker.number.float({ min: 0, max: 10, precision: 0.5 }),
        tags: faker.helpers.arrayElements(
          ['fresh', 'organic', 'local', 'best quality', 'healthy'],
          2
        ),
        totalSales: faker.number.int({ min: 0, max: 500 }),
      });
    }

    await Product.insertMany(products);
    console.log(`${count} products inserted successfully!`);
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};

// 🔹 Run Seeding Functions
const seedDatabase = async () => {
  await generateFakeUsers(10);
  await generateFakeProducts(20);
  mongoose.connection.close();
};

seedDatabase();

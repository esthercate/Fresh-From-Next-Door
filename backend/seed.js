import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB only if not already connected
if (mongoose.connection.readyState === 0) {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch((err) => console.error('MongoDB Connection Error:', err));
}

// List of fruit and vegetable names
const fruitNames = [
  'Apple',
  'Banana',
  'Orange',
  'Mango',
  'Strawberry',
  'Pineapple',
  'Grapes',
  'Watermelon',
  'Papaya',
  'Cherry',
];
const vegetableNames = [
  'Carrot',
  'Broccoli',
  'Spinach',
  'Potato',
  'Cucumber',
  'Tomato',
  'Bell Pepper',
  'Onion',
  'Garlic',
  'Lettuce',
];

// Image URLs
const fruitImageUrl = 'https://example.com/images/fruits.jpg';
const vegetableImageUrl = 'https://example.com/images/vegetables.jpg';

const generateFakeProducts = async (count = 20) => {
  try {
    await Product.deleteMany(); // Clear existing products
    console.log('Existing products deleted.');

    const products = [];

    for (let i = 0; i < count; i++) {
      const category = faker.helpers.arrayElement(['fruit', 'vegetable']);

      // Select a name based on category
      const name =
        category === 'fruit'
          ? faker.helpers.arrayElement(fruitNames)
          : faker.helpers.arrayElement(vegetableNames);

      // Assign the appropriate image URL
      const imageUrl = category === 'fruit' ? fruitImageUrl : vegetableImageUrl;

      const price = faker.number.float({ min: 1, max: 100, precision: 0.01 });
      const stock = faker.number.int({ min: 1, max: 100 });
      const totalSales = faker.number.int({ min: 0, max: 500 });

      // Randomly determine if this product is a deal
      const dealOfTheDay = faker.datatype.boolean();
      let dealPrice = null;
      let dealStartDate = null;
      let dealEndDate = null;

      if (dealOfTheDay) {
        dealPrice = faker.number.float({
          min: 0.5,
          max: price - 0.1,
          precision: 0.01,
        });
        dealStartDate = faker.date.soon({ days: 5 });
        dealEndDate = faker.date.soon({ days: 10, refDate: dealStartDate });
      }

      products.push({
        name,
        price,
        image: imageUrl,
        description: faker.commerce.productDescription(),
        stock,
        category,
        rating: {
          average: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
          count: faker.number.int({ min: 1, max: 200 }),
        },
        dealOfTheDay,
        dealPrice,
        dealStartDate,
        dealEndDate,
        shippingCost: faker.number.float({ min: 0, max: 10, precision: 0.5 }),
        tags: faker.helpers.arrayElements(
          ['fresh', 'organic', 'local', 'best quality', 'healthy'],
          2
        ),
        totalSales,
        isBestSeller: totalSales > 200, // If total sales exceed 200, mark as best seller
      });
    }

    await Product.insertMany(products);
    console.log(`${count} fruit & vegetable products inserted successfully!`);
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Run the function with a default of 20 products
generateFakeProducts(20);

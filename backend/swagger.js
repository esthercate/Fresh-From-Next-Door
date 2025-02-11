import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FreshFromNextDoor API',
      version: '1.0.0',
      description: 'API documentation for products and users',
    },
    servers: [{ url: 'http://localhost:5000' }],
    components: {
      schemas: {
        // ✅ User Schema
        User: {
          type: 'object',
          required: ['name', 'email', 'password'],
          properties: {
            id: { type: 'string', description: 'User ID' },
            name: { type: 'string', description: 'Full name of the user' },
            email: {
              type: 'string',
              format: 'email',
              description: 'Unique email of the user',
            },
            password: {
              type: 'string',
              format: 'password',
              description: 'Hashed password',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Timestamp of creation',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Timestamp of last update',
            },
          },
        },
        LoginInput: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: {
              type: 'string',
              format: 'email',
              description: 'User email',
            },
            password: {
              type: 'string',
              format: 'password',
              description: 'User password',
            },
          },
        },
        AuthResponse: {
          type: 'object',
          properties: {
            token: {
              type: 'string',
              description: 'JWT token for authentication',
            },
            user: {
              type: 'object',
              properties: {
                id: { type: 'string', description: 'User ID' },
                name: { type: 'string', description: 'User name' },
                email: { type: 'string', description: 'User email' },
              },
            },
          },
        },

        // ✅ Product Schema
        Product: {
          type: 'object',
          required: [
            'name',
            'price',
            'image',
            'description',
            'stock',
            'category',
          ],
          properties: {
            id: { type: 'string', description: 'Product ID' },
            name: { type: 'string', description: 'Product name' },
            price: { type: 'number', description: 'Product price' },
            image: { type: 'string', description: 'Product image URL' },
            description: { type: 'string', description: 'Product description' },
            stock: { type: 'number', description: 'Stock quantity' },
            category: {
              type: 'string',
              description: 'Category of the product',
            },
            dealOfTheDay: {
              type: 'boolean',
              description: 'Is this a deal of the day?',
            },
            dealPrice: {
              type: 'number',
              description: 'Deal price if applicable',
            },
            shippingCost: { type: 'number', description: 'Shipping cost' },
            tags: {
              type: 'array',
              items: { type: 'string' },
              description: 'Tags associated with the product',
            },
            totalSales: { type: 'number', description: 'Total sales count' },
            isBestSeller: {
              type: 'boolean',
              description: 'Is this product a bestseller?',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Product creation timestamp',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Product last update timestamp',
            },
          },
        },
      },
    },
  },
  apis: ['./documentation/productsDocs.js', './documentation/usersDocs.js'],
};

const swaggerDocs = swaggerJsdoc(options);

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../server.js';
import User from '../models/User.js';

let mongoServer;

// 🟢 Setup In-Memory MongoDB before tests
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

// 🔴 Cleanup after all tests
afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe('GET /api/users/all', () => {
  beforeEach(async () => {
    // 🔹 Clear users collection before each test
    await User.deleteMany();

    // 🔹 Insert test users
    await User.create([
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'hashedpassword',
      },
      {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: 'hashedpassword',
      },
    ]);
  });

  it('should return all users without passwords', async () => {
    const res = await request(app).get('/api/users/all');

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
    expect(res.body[0]).toHaveProperty('name', 'John Doe');
    expect(res.body[0]).toHaveProperty('email', 'john@example.com');
    expect(res.body[0]).not.toHaveProperty('password'); // ❌ Password should not be exposed
  });
});

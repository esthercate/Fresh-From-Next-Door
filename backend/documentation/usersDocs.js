/**
 * Attach Swagger documentation to the user routes.
 * @param {import('express').Router} router
 */
const userDocs = (router) => {
  /**
   * @swagger
   * tags:
   *   name: Users
   *   description: API endpoints for user authentication and management
   */

  /**
   * @swagger
   * /users/register:
   *   post:
   *     summary: Register a new user
   *     tags: [Users]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/User'
   *     responses:
   *       201:
   *         description: User registered successfully
   *       400:
   *         description: User already exists or invalid data
   */
  router.post('/register', (req, res) => {});

  /**
   * @swagger
   * /users/login:
   *   post:
   *     summary: Authenticate user and return JWT
   *     tags: [Users]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/LoginInput'
   *     responses:
   *       200:
   *         description: Successfully logged in, returns token
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/AuthResponse'
   *       400:
   *         description: Invalid credentials
   */
  router.post('/login', (req, res) => {});

  /**
   * @swagger
   * /users/all:
   *   get:
   *     summary: Get all registered users
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: List of all users (excluding passwords)
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/User'
   */
  router.get('/all', (req, res) => {});
};

export default userDocs;

/**
 * Attach Swagger documentation to the product routes.
 * @param {import('express').Router} router
 */
const productDocs = (router) => {
  /**
   * @swagger
   * tags:
   *   name: Products
   *   description: API endpoints for managing products
   */

  /**
   * @swagger
   * /products:
   *   get:
   *     summary: Get all products
   *     tags: [Products]
   *     responses:
   *       200:
   *         description: List of all products
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Product'
   */
  router.get('/', (req, res) => {});

  /**
   * @swagger
   * /products:
   *   post:
   *     summary: Create a new product
   *     tags: [Products]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Product'
   *     responses:
   *       201:
   *         description: Product created successfully
   */
  router.post('/', (req, res) => {});

  /**
   * @swagger
   * /products/{id}:
   *   get:
   *     summary: Get a product by ID
   *     tags: [Products]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: The product ID
   *     responses:
   *       200:
   *         description: Product data
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Product'
   *       404:
   *         description: Product not found
   */
  router.get('/:id', (req, res) => {});

  /**
   * @swagger
   * /products/{id}:
   *   put:
   *     summary: Update an existing product
   *     tags: [Products]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: The product ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Product'
   *     responses:
   *       200:
   *         description: Product updated successfully
   *       400:
   *         description: Invalid request data
   *       404:
   *         description: Product not found
   */
  router.put('/:id', (req, res) => {});

  /**
   * @swagger
   * /products/{id}:
   *   delete:
   *     summary: Delete a product
   *     tags: [Products]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: The product ID
   *     responses:
   *       200:
   *         description: Product deleted successfully
   *       404:
   *         description: Product not found
   */
  router.delete('/:id', (req, res) => {});
};

export default productDocs;

const express = require('express');

// Initialize the Router
const router = express.Router();

// Require the Controllers
const productController = require('../controllers/product.');

// Add the Routes
router.post('/create', productController.productCreate);
router.get('/', productController.getAllProducts);

// Export the Route
module.exports = router;
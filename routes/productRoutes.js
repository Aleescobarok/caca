const express = require('express');
const { getProducts, addProduct } = require('../controllers/productController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/products', auth, getProducts);
router.post('/products', auth, addProduct);

module.exports = router;

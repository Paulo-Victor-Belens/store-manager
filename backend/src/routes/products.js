const express = require('express');
const ProductsController = require('../controllers/products.controller');
const validateProduct = require('../middlewares/validationProduct');

const router = express.Router();

// Aqui vão os validadores, middlewares, etc...

router.get('/', ProductsController.show);

router.get('/:id', ProductsController.showById);

router.post('/', validateProduct, ProductsController.createProduct);

module.exports = router;

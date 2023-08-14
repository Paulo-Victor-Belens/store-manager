const express = require('express');
const ProductsController = require('../controllers/products.controller');

const router = express.Router();

// Aqui vão os validadores, middlewares, etc...

router.get('/', ProductsController.show);

router.get('/:id', ProductsController.showById);

module.exports = router;

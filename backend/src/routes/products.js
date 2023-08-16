const express = require('express');
const ProductsController = require('../controllers/products.controller');
const validateProduct = require('../middlewares/validationProduct');
const validateUpdateProduct = require('../middlewares/validationUpdateProducts');
const validateProductExist = require('../middlewares/validationDeleteProducts');

const router = express.Router();

// Aqui vão os validadores, middlewares, etc...

router.get('/:id', ProductsController.showById);

router.put('/:id', validateUpdateProduct, ProductsController.updateProduct);

router.delete('/:id', validateProductExist, ProductsController.deleteProduct);

router.get('/', ProductsController.show);

router.post('/', validateProduct, ProductsController.createProduct);

module.exports = router;

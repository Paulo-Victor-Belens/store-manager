const express = require('express');
const SalesController = require('../controllers/sales.controller');
const validationSales = require('../middlewares/validationSales');
const validationSalesUpdate = require('../middlewares/validationUpdateSales');

const router = express.Router();

// Aqui vão os validadores, middlewares, etc...

router.put(
'/:saleId/products/:productId/quantity', 
validationSalesUpdate,
SalesController.updateSales,
);

router.get('/:id', SalesController.showById);

router.delete('/:id', SalesController.deleteSales);

router.get('/', SalesController.show);

router.post('/', validationSales, SalesController.createSales);

module.exports = router;
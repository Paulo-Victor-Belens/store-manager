const express = require('express');
const SalesController = require('../controllers/sales.controller');
const validationSales = require('../middlewares/validationSales');

const router = express.Router();

// Aqui vão os validadores, middlewares, etc...

router.get('/', SalesController.show);

router.get('/:id', SalesController.showById);

router.post('/', validationSales, SalesController.createSales);

module.exports = router;
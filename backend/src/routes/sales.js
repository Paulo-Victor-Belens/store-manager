const express = require('express');
const SalesController = require('../controllers/sales.controller');

const router = express.Router();

// Aqui vão os validadores, middlewares, etc...

router.get('/', SalesController.show);

router.get('/:id', SalesController.showById);

module.exports = router;
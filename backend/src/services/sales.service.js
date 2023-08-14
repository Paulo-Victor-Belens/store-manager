const SalesModel = require('../models/sales.model');

    function findAll() {
        return SalesModel.getAll();
    }

    function findById(id) {
        return SalesModel.getById(id);
    }

module.exports = {
    findAll,
    findById,
};
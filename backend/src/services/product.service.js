const ProductsModel = require('../models/products.model');

    function findAll() {
        return ProductsModel.getAll();
    }

    function findById(id) {
        return ProductsModel.getById(id);
    }

module.exports = {
    findAll,
    findById,
};
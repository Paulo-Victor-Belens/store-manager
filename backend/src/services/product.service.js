const ProductsModel = require('../models/products.model');

    async function findAll() {
        const products = await ProductsModel.getAll();

        return { status: 'SUCCESSFUL', data: products };
    }

    async function findById(id) {
        const products = await ProductsModel.getById(id);

        if (!products) {
            return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
        }

        return { status: 'SUCCESSFUL', data: products };
    }

    async function create(product) {
        const products = await ProductsModel.createInDB(product);

        return { status: 'CREATED', data: products };
    }

module.exports = {
    findAll,
    findById,
    create,
};
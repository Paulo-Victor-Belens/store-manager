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

    async function update(id, product) {
        const productExist = await ProductsModel.getById(id);
        
        if (!productExist) {
            return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
        }
        
        await ProductsModel.updateInDB(id, product);

        const productsUpdate = await ProductsModel.getById(id);

        return { status: 'SUCCESSFUL', data: productsUpdate };
    }

    async function deleteProduct(id) {
        const productExist = await ProductsModel.getById(id);
        
        if (!productExist) {
            return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
        }
        
        await ProductsModel.deleteInDB(id);
        return { status: 'DELETED' };
    }

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteProduct,
};
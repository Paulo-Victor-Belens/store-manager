const SalesModel = require('../models/sales.model');
const ProductModel = require('../models/products.model');

    async function findAll() {
        const sales = await SalesModel.getAll();

        return { status: 'SUCCESSFUL', data: sales };
    }

    async function findById(id) {
        const sales = await SalesModel.getById(id);

        if (sales.length === 0) {
            return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
        }

        return { status: 'SUCCESSFUL', data: sales };
        }

    async function create(sales) {
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const newSale = await SalesModel.createSales(currentDate);

        sales.forEach(async (item) => {
            const { productId, quantity } = item;
        
            await SalesModel.createSalesProducts(newSale, productId, quantity);
        });

        return { status: 'CREATED', data: newSale };
        }

    async function deleteSales(id) {
        const salesExsists = await SalesModel.getById(id);

        if (salesExsists.length === 0) {
            return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
        }

        await SalesModel.deleteSales(id);

        return { status: 'DELETED' };
    }

    async function updateSales(saleId, productId, quantity) {
        const salesExsists = await SalesModel.getById(saleId);
        const productExsists = await ProductModel.getById(productId);
        
        if (!productExsists) {
            return { status: 'NOT_FOUND', data: { message: 'Product not found in sale' } };
        }

        if (salesExsists.length === 0) {
            return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
        }

        const date = await SalesModel.updateSales(saleId, productId, quantity);

        return { status: 'SUCCESSFUL',
        data: { 
            date, 
            productId: Number(productId), 
            quantity,
            saleId: Number(saleId), 
            },
        };
    }
module.exports = {
    findAll,
    findById,
    create,
    deleteSales,
    updateSales,
};
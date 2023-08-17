const SalesModel = require('../models/sales.model');

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

module.exports = {
    findAll,
    findById,
    create,
    deleteSales,
};
const SalesModel = require('../models/sales.model');

    async function findAll() {
        const sales = await SalesModel.getAll();

        if (!sales) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };

        return { status: 'SUCCESSFUL', data: sales };
    }

    async function findById(id) {
      const sales = await SalesModel.getById(id);

      if (sales.length === 0) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };

      return { status: 'SUCCESSFUL', data: sales };
    }

module.exports = {
    findAll,
    findById,
};
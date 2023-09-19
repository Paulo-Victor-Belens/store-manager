const ProductService = require('../services/product.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

    async function show(req, res) {
      const { status, data } = await ProductService.findAll();
      return res.status(mapStatusHTTP(status)).json(data);
    }

    async function showById(req, res) {
      const { id } = req.params;
      const { status, data } = await ProductService.findById(id);
      return res.status(mapStatusHTTP(status)).json(data);  
    }

    async function createProduct(req, res) {
      const { name } = req.body;
        const { status, data } = await ProductService.create(name);
        return res.status(mapStatusHTTP(status)).json({ id: data, name });
    }

    async function updateProduct(req, res) {
      const { id } = req.params;
      const { name } = req.body;
      const { status, data } = await ProductService.update(id, name);
      return res.status(mapStatusHTTP(status)).json(data);
    }

    async function deleteProduct(req, res) {
      const { id } = req.params;
      const { status, data } = await ProductService.deleteProduct(id);
      if (data === null) {
        return res.status(mapStatusHTTP(status)).end();
      }
      return res.status(mapStatusHTTP(status)).json(data);
    }

    async function showBySearch(req, res) {
      const name = req.query.q;
      const { status, data } = await ProductService.findBySearch(name);
      return res.status(mapStatusHTTP(status)).json(data);
    }

module.exports = {
    show,
    showById,
    createProduct,
    updateProduct,
    deleteProduct,
    showBySearch,
};
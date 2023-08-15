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

    // update(req, res) {
    //     res.send('Update Product ' + req.params.id);
    // }

    // delete(req, res) {
    //     res.send('Delete Product ' + req.params.id);
    // }

module.exports = {
    show,
    showById,
    createProduct,
};
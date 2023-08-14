const ProductService = require('../services/product.service');

    async function show(req, res) {
      return res.status(200).json(await ProductService.findAll());
    }

    async function showById(req, res) {
      const { id } = req.params;

      if (!await ProductService.findById(id)) {
        return res.status(404).json({ message: 'Product not found' });
      } 

      return res.status(200).json(await ProductService.findById(id));
    }

    // create(req, res) {
    //     res.send('Create Product');
    // }

    // update(req, res) {
    //     res.send('Update Product ' + req.params.id);
    // }

    // delete(req, res) {
    //     res.send('Delete Product ' + req.params.id);
    // }

module.exports = {
    show,
    showById,
};
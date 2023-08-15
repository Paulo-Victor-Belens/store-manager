const SalesService = require('../services/sales.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

    async function show(_req, res) {
      const { status, data } = await SalesService.findAll();
      return res.status(mapStatusHTTP(status)).json(data);
    }

    async function showById(req, res) {
      const { id } = req.params;
      const { status, data } = await SalesService.findById(id);
      return res.status(mapStatusHTTP(status)).json(data);
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
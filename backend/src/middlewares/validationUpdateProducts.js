const ProductModel = require('../models/products.model');

const validateUpdateProduct = (req, res, next) => {
  const { body } = req;

  if (!body.name) {
    return res.status(400)
      .json({ message: '"name" is required' });
  }

  if (body.name.length < 5) {
    return res.status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }

  return next();
};

const validateProductInDB = async (req, res, next) => {
  const { id } = req.params;

  const product = await ProductModel.getById(id);
                
  if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    } 
  
  return next();
};

module.exports = [validateUpdateProduct, validateProductInDB];
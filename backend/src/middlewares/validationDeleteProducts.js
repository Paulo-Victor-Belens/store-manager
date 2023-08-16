const ProductModel = require('../models/products.model');

const validateProductInDB = async (req, res, next) => {
  const { id } = req.params;

  const product = await ProductModel.getById(id);
                
  if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    } 
  
  return next();
};

module.exports = [validateProductInDB];
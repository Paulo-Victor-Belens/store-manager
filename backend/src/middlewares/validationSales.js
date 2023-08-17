const ProductModel = require('../models/products.model');

const validateBody = (req, res, next) => {
  const { body } = req;

  if (!Array.isArray(body)) {
    return res.status(400)
      .json({ message: 'Request body must be an array' });
  }
  
  if (body.length === 0) {
    return res.status(400)
      .json({ message: 'Empty request body' });
  }

  return next();
};

const validateSalesKeys = (req, res, next) => {
  const { body } = req;
  const response = body.map((sale) => {
    if (!sale.productId) {
      return res.status(400)
        .json({ message: '"productId" is required' });
    }

    return null;
  });
  
  if (response.some((element) => element !== null)) return;

  return next();
};

const validateSalesKeys2 = (req, res, next) => {
  const { body } = req;
  const response = body.map((sale) => {
    if (sale.quantity <= 0) {
      return res.status(422)
        .json({ message: '"quantity" must be greater than or equal to 1' });
    }
    return null;
  });

  if (response.some((element) => element !== null)) return;

  return next();
};

const validateSalesKeys3 = (req, res, next) => {
  const { body } = req;
  const response = body.map((sale) => {
    if (!sale.quantity && sale.quantity !== 0) {
      return res.status(400)
        .json({ message: '"quantity" is required' });
    }
    return null;
  });

  if (response.some((element) => element !== null)) return;

  return next();
};

const validateProductExists = async (req, res, next) => {
  const { body } = req;

  const response = body.map(async (sale) => {
    const product = await ProductModel.getById(sale.productId);
                
      if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        } 

    return null;
  });

  const mappedResponse = await Promise.all(response);

  if (mappedResponse.some((element) => element !== null)) {
    return;
  }
  
  return next();
};

module.exports = [
  validateBody, 
  validateSalesKeys,
  validateSalesKeys2,
  validateSalesKeys3,
  validateProductExists];
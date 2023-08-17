const validateQuantity = (req, res, next) => {
  const { quantity } = req.body;

    if (quantity <= 0) {
      return res.status(422)
        .json({ message: '"quantity" must be greater than or equal to 1' });
    }

  return next();
};

const validateQuantity2 = (req, res, next) => {
  const { quantity } = req.body;
    if (!quantity && quantity !== 0) {
      return res.status(400)
        .json({ message: '"quantity" is required' });
    }

  return next();
};

module.exports = [validateQuantity, validateQuantity2];
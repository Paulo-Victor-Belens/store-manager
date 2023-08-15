const validateProduct = (req, res, next) => {
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

module.exports = validateProduct;
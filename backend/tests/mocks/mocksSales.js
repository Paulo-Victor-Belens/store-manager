const date = '2023-08-15T03:24:49.000Z';

const salesFromModel = [
  {
    saleId: 1,
    date,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date,
    productId: 3,
    quantity: 15,
  },
];

const salesFromDB = [
  {
    saleId: 1,
    date,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: '2023-08-14T21:28:34.000Z',
    productId: 3,
    quantity: 15,
  },
];

const salesByIdFromModel = {
  date: '2023-08-15T03:24:49.000Z',
  productId: 1,
  quantity: 5,
};

const salesByIdFromDB = {
  date: '2023-08-15T03:24:49.000Z',
  productId: 1,
  quantity: 5,
};

module.exports = {
  salesFromModel,
  salesFromDB,
  salesByIdFromModel,
  salesByIdFromDB,
};
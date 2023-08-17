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

const salesByIdFromModel = [
  {
    date,
    productId: 1,
    quantity: 5,
  },
  {
    date,
    productId: 2,
    quantity: 10,
  },
];

const salesByIdFromDB = [
  {
    date,
    productId: 1,
    quantity: 5,
  },
  {
    date,
    productId: 2,
    quantity: 10,
  },
];

const salesCreatedValid = [
  {
    productId: 2,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 3,
  },
];

const salesCreatedwithoutKeyProductId = [
  {
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 3,
  },
];

const salesCreatedwithoutKeyQuantity = [
  {
    productId: 10,
  },
  {
    productId: 2,
    quantity: 3,
  },
];

const salesCreatedwithtKeyQuantityEqualZero = [
  {
    productId: 10,
    quantity: 5,
  },
  {
    productId: 2,
    quantity: 0,
  },
];

const salesCreatedwithoutProductInDB = [
  {
    productId: 1000,
    quantity: 3,
  },
  {
    productId: 2,
    quantity: 3,
  },
];

const createSaleFromModel = {
  fieldCount: 0,
  affectedRows: 2,
  insertId: 0,
  info: 'Records: 2  Duplicates: 0  Warnings: 0',
  serverStatus: 2,
  warningStatus: 0,
};

module.exports = {
  salesFromModel,
  salesFromDB,
  salesByIdFromModel,
  salesByIdFromDB,
  salesCreatedValid,
  salesCreatedwithoutKeyProductId,
  salesCreatedwithoutKeyQuantity,
  salesCreatedwithtKeyQuantityEqualZero,
  salesCreatedwithoutProductInDB,
  createSaleFromModel,
};
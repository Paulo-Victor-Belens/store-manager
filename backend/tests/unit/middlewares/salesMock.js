const createSuccessfulSaleBodyMock = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const missingProductIdBodyMock = [
  {
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const missingQuantityBodyMock = [
  {
    productId: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const zeroQuantityBodyMock = [
  {
    productId: 1,
    quantity: 0,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const productNotExist = [
  {
    productId: 4545,
    quantity: 2,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const productExist = [
  {
    productId: 1,
    quantity: 4,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

module.exports = {
  createSuccessfulSaleBodyMock,
  missingProductIdBodyMock,
  missingQuantityBodyMock,
  zeroQuantityBodyMock,
  productNotExist,
  productExist,
};
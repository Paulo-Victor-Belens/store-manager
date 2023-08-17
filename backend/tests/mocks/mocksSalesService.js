const date = '2023-08-15T03:24:49.000Z';

const getAllSales = { 
  status: 'SUCCESSFUL', 
  data: [
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
  ], 
};

const getByIdSale = { 
  status: 'SUCCESSFUL', 
  data: [
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
  ],
};

const createdSale = {
  id: 4,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

module.exports = {
  getAllSales,
  getByIdSale,
  createdSale,
};
const mockDate = '2023-09-14T18:24:45.000Z';

const getAllSalesFromDB = [
  [
    {
      id: 1,
      date: mockDate, 
      saleId: 1, 
      productId: 1,
      quantity: 5,
    },
    {
      id: 1,
      date: mockDate,
      saleId: 1, 
      productId: 2, 
      quantity: 10,
    },
    {
      id: 2,
      date: mockDate, 
      saleId: 2, 
      productId: 3, 
      quantity: 15,
    },
  ],
  null,
];

const getAllSalesFromModel = [
  {
    id: 1,
    date: mockDate,
    saleId: 1,
    productId: 1,
    quantity: 5,
  },
  {
    id: 1,
    date: mockDate,
    saleId: 1,
    productId: 2,
    quantity: 10,
  },
  {
    id: 2,
    date: mockDate,
    saleId: 2,
    productId: 3,
    quantity: 15,
  },
];

const getSaleByIdFromDB = [
  [
    {
      id: 1,
      date: mockDate,
      saleId: 1,
      productId: 1, 
      quantity: 5,
    },
    {
      id: 1,
      date: mockDate, 
      saleId: 1, 
      productId: 2, 
      quantity: 10,
    },
  ],
  null,
];

const getSaleByIdFromModel = [
  {
    id: 1,
    date: mockDate,
    saleId: 1,
    productId: 1,
    quantity: 5,
  },
  {
    id: 1,
    date: mockDate,
    saleId: 1,
    productId: 2,
    quantity: 10,
  },
];

const insertSaleInDB = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 3,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
  },
  undefined,
];

const createSaleFromDB = [
  {
    fieldCount: 0,
    affectedRows: 2,
    insertId: 0,
    info: 'Records: 2  Duplicates: 0  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
  },
  undefined,
];

const createSaleFromModel = {
  fieldCount: 0,
  affectedRows: 2,
  insertId: 0,
  info: 'Records: 2  Duplicates: 0  Warnings: 0',
  serverStatus: 2,
  warningStatus: 0,
};

const saleDataMock = [
  {
    saleId: 1,
    productId: 1, 
    quantity: 5,
  },
  {
    saleId: 1, 
    productId: 2, 
    quantity: 10,
  },
];

module.exports = {
  getAllSalesFromDB,
  getAllSalesFromModel,
  getSaleByIdFromDB,
  getSaleByIdFromModel,
  insertSaleInDB,
  createSaleFromDB,
  createSaleFromModel,
  saleDataMock,
};
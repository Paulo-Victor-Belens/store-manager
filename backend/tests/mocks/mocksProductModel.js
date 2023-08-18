const nameThor = 'Martelo de Thor';

const getAllInDB = [
  [
    {
      id: 1,
      name: nameThor,
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do Capitão América',
    },
  ],
  null,
];

const getAllInDBModel = [
  {
    id: 1,
    name: nameThor,
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const getByIdInDB = [
  [
    {
      id: 1,
      name: nameThor,
    },
  ],
];

const getByIdInModelSearch = [
  [
    {
      id: 1,
      name: nameThor,
    },
  ],
];

const getByIdInDBModel = {
  id: 1,
  name: nameThor,
};

const createProductInDB = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 4,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
  },
  undefined,
];

const updateProductInDB = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 1  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 1,
  },
  null,
];

const updateProductInDBModel = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 1  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 1,
  },
  null,
];

const deleteProductInDB = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
  },
  undefined,
];

const deleteProductInDBModel = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: '',
  serverStatus: 2,
  warningStatus: 0,
};

module.exports = {
  getAllInDB,
  getByIdInDB,
  createProductInDB,
  updateProductInDB,
  deleteProductInDB,
  getAllInDBModel,
  getByIdInDBModel,
  updateProductInDBModel,
  deleteProductInDBModel,
  getByIdInModelSearch,
};
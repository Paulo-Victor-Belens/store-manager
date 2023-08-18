const chai = require('chai');
const sinon = require('sinon');
const ProductModel = require('../../../src/models/products.model');
const connection = require('../../../src/models/connection');
const {
  getAllInDB,
  getByIdInDB,
  createProductInDB,
  updateProductInDB,
  deleteProductInDB,
  getAllInDBModel,
  getByIdInDBModel,
  updateProductInDBModel,
  deleteProductInDBModel,
} = require('../../mocks/mocksProductModel');

const { expect } = chai;

describe('Products Models unit tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('getAllProducts should return an array of all products', async function () {
    sinon.stub(connection, 'execute').resolves(getAllInDB);
    const products = await ProductModel.getAll();
    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(3);
    expect(products).to.deep.equal(getAllInDBModel);
  });

  it('get Product By Id should return an object with the product', async function () {
    sinon.stub(connection, 'execute').resolves(getByIdInDB);
    const product = await ProductModel.getById(1);
    expect(product).to.be.an('object');
    expect(product).to.deep.equal(getByIdInDBModel);
  });

  it('create Product should create a new product and return it', async function () {
    sinon.stub(connection, 'execute').resolves(createProductInDB);
    const name = 'Test Product';
    const productCreated = await ProductModel.createInDB(name);
    expect(productCreated).to.be.an('number');
    expect(productCreated).to.deep.equal(4);
  });

  it('update Product should update a new product and return it', async function () {
    sinon.stub(connection, 'execute').resolves(updateProductInDB);
    const id = '1';
    const name = 'Test Product';
    const productCreated = await ProductModel.updateInDB(id, name);
    expect(productCreated).to.be.an('array');
    expect(productCreated).to.deep.equal(updateProductInDBModel);
  });

  it('delete Product should delete a new product and return it', async function () {
    sinon.stub(connection, 'execute').resolves(deleteProductInDB);
    const id = '1';
    const productCreated = await ProductModel.deleteInDB(id);
    expect(productCreated).to.be.an('object');
    expect(productCreated).to.deep.equal(deleteProductInDBModel);
  });

  it('Searh Product by name should return an object', async function () {
    sinon.stub(connection, 'execute').resolves([{ id: 1, name: 'Martelo de Thor' }]);
    const name = 'Martelo';
    const productCreated = await ProductModel.getBySearch(name);
    expect(productCreated).to.be.an('object');
    expect(productCreated).to.deep.equal({ id: 1, name: 'Martelo de Thor' });
  });
});
const chai = require('chai');
const sinon = require('sinon');
const ProductsServices = require('../../../src/services/product.service');
const ProductsModels = require('../../../src/models/products.model');

// mocks
const {
  productsFromModel,
  // productsFromDB,
  productByIdFromModel,
  // productByIdFromDB,
  productUpdate,
  updateProductInDB,
} = require('../../mocks/mocksProducts');

const {
  serviceGetAll,
  serviceGetById,
} = require('../../mocks/mocksPoductsService');
const connection = require('../../../src/models/connection');

const { expect } = chai;

describe('Products Services unit tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('getAll should return an array of all products', async function () {
    sinon.stub(ProductsModels, 'getAll').resolves(productsFromModel);
    const products = await ProductsServices.findAll();
    expect(products).to.be.an('object');
    expect(products).to.deep.equal(serviceGetAll);
  });

  it('get Product By Id should return an object with the product', async function () {
    sinon.stub(ProductsModels, 'getById').resolves(productByIdFromModel);
    const product = await ProductsServices.findById(1);
    expect(product).to.be.an('object');
    expect(product).to.deep.equal(serviceGetById);
  });

  it('create Product should return an object with the product', async function () {
    sinon.stub(ProductsModels, 'createInDB').resolves(1);
    const request = 'Test Product';
    const product = await ProductsServices.create(request);
    expect(product).to.be.an('object');
    expect(product).to.deep.equal({ status: 'CREATED', data: 1 });
  });
  
  it('Update Product should return an object with the product', async function () {
    sinon.stub(connection, 'execute').resolves(updateProductInDB);
    sinon.stub(ProductsModels, 'updateInDB').resolves(productUpdate);
    const id = '1';
    const name = 'Martelo de Thor';
    const product = await ProductsServices.update(id, name);
    expect(product).to.be.an('object');
    // expect(product).to.deep.equal(updateService);
  });

  it('delete Product should return an object with the product', async function () {
    const deleted = sinon.stub(ProductsModels, 'deleteInDB').resolves();
    await ProductsServices.deleteProduct(1);
    expect(deleted.calledOnce).to.be.equal(true);
  });
});
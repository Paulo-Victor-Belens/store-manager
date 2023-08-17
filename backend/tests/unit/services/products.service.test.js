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
const mapStatusHTTP = require('../../../src/utils/mapStatusHTTP');

const { expect } = chai;

describe('Products Services unit tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('findAll should return an array of all products', async function () {
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

  it('Update Product if id not extist should return an object with the product', async function () {
    sinon.stub(ProductsModels, 'updateInDB').resolves([]);
    const id = '545';
    const name = 'Martelo de Thor';
    const product = await ProductsServices.update(id, name);
    expect(product).to.be.an('object');
    expect(product).to.deep.equal({ status: 'NOT_FOUND', data: { message: 'Product not found' } });
  });

  it('delete Product should return an object with the product', async function () {
    const deleted = sinon.stub(ProductsModels, 'deleteInDB').resolves();
    await ProductsServices.deleteProduct(1);
    expect(deleted.calledOnce).to.be.equal(true);
  });

  it('delete Product if id not exist should return an object with the product', async function () {
    sinon.stub(ProductsModels, 'deleteInDB').resolves();
    const isDelet = await ProductsServices.deleteProduct(545);
    expect(isDelet).to.be.an('object');
    expect(isDelet).to.deep.equal({ status: 'NOT_FOUND', data: { message: 'Product not found' } });
  });

  it('Testando a função mapStatusHTTP com status existente', function () {
    const response = mapStatusHTTP('SUCCESSFUL');

    expect(response).to.be.equal(200);
  });

  it('Testando a função mapStatusHTTP com status não existente', function () {
    const response = mapStatusHTTP('TESTE');

    expect(response).to.be.equal(500);
  });
});
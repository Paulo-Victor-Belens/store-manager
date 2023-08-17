const chai = require('chai');
const sinon = require('sinon');
const SalesServices = require('../../../src/services/sales.service');
const SalesModels = require('../../../src/models/sales.model');

// mocks
const {
  salesFromModel,
  salesByIdFromModel,
  createSaleFromModel,
} = require('../../mocks/mocksSales');

const {
  getAllSales,
  getByIdSale,
} = require('../../mocks/mocksSalesService');
// const connection = require('../../../src/models/connection');

const { expect } = chai;

describe('Products Services unit tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('getAll should return an array of all sales', async function () {
    sinon.stub(SalesModels, 'getAll').resolves(salesFromModel);
    const sales = await SalesServices.findAll();
    expect(sales).to.be.an('object');
    expect(sales).to.deep.equal(getAllSales);
  });

  it('get sales By Id should return an object with the sales', async function () {
    sinon.stub(SalesModels, 'getById').resolves(salesByIdFromModel);
    const sales = await SalesServices.findById(1);
    expect(sales).to.be.an('object');
    expect(sales).to.deep.equal(getByIdSale);
  });

  it('get sales By Id if not exist should return an object with the sales', async function () {
    sinon.stub(SalesModels, 'getById').resolves([]);
    const sales = await SalesServices.findById(156);
    expect(sales).to.be.an('object');
    expect(sales).to.deep.equal({ status: 'NOT_FOUND', data: { message: 'Sale not found' } });
  });
  
  it('create sales should return an array with the sales', async function () {
    sinon.stub(SalesModels, 'createSales').resolves(1);
    sinon.stub(SalesModels, 'createSalesProducts').resolves(createSaleFromModel);
    const request = [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];
    const sales = await SalesServices.create(request);
    expect(sales).to.be.an('object');
    expect(sales).to.deep.equal({ status: 'CREATED', data: 1 });
  });
  
  // it('Update Product should return an object with the product', async function () {
  //   sinon.stub(connection, 'execute').resolves(updateProductInDB);
  //   sinon.stub(SalesModels, 'updateInDB').resolves(productUpdate);
  //   const id = '1';
  //   const name = 'Martelo de Thor';
  //   const product = await SalesServices.update(id, name);
  //   expect(product).to.be.an('object');
  //   // expect(product).to.deep.equal(updateService);
  // });

  // it('delete Product should return an object with the product', async function () {
  //   const deleted = sinon.stub(SalesModels, 'deleteInDB').resolves();
  //   await SalesServices.deleteProduct(1);
  //   expect(deleted.calledOnce).to.be.equal(true);
  // });
});
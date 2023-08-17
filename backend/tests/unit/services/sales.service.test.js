const chai = require('chai');
const sinon = require('sinon');
const SalesServices = require('../../../src/services/sales.service');
const SalesModels = require('../../../src/models/sales.model');

// mocks
const {
  salesFromModel,
  salesByIdFromModel,
  createSaleFromModel,
  updateSaleFromModel,
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

  it('Delete Sales should be successful', async function () {
    sinon.stub(SalesModels, 'deleteSales').resolves(1);
    const sales = await SalesServices.deleteSales(1);
    expect(sales).to.be.an('object');
    expect(sales).to.deep.equal({ status: 'DELETED' });
  });
  
  it('Delete Sales should be NOT successful', async function () {
    sinon.stub(SalesModels, 'deleteSales').resolves([]);
    const sales = await SalesServices.deleteSales(2125);
    expect(sales).to.be.an('object');
    expect(sales).to.deep.equal({ status: 'NOT_FOUND', data: { message: 'Sale not found' } });
  });

  it('Update sales should return an object with the update', async function () {
    sinon.stub(SalesModels, 'updateSales').resolves('2023-08-17T20:49:27.000Z');
    const productId = 2;
    const saleId = 1;
    const quantity = 20;
    const sales = await SalesServices.updateSales(saleId, productId, quantity);
    expect(sales).to.be.an('object');
    expect(sales).to.deep.equal({ status: 'SUCCESSFUL', data: updateSaleFromModel });
  });

  it('Update sales should return erro if productId not exist', async function () {
    sinon.stub(SalesModels, 'updateSales').resolves('2023-08-17T20:49:27.000Z');
    const productId = 3434;
    const saleId = 1;
    const quantity = 20;
    const sales = await SalesServices.updateSales(saleId, productId, quantity);
    expect(sales).to.be.an('object');
    expect(sales).to.deep.equal({ status: 'NOT_FOUND', data: { message: 'Product not found in sale' } });
  });

  it('Update sales should return erro if saleId not exist', async function () {
    sinon.stub(SalesModels, 'updateSales').resolves('2023-08-17T20:49:27.000Z');
    const productId = 2;
    const saleId = 1212;
    const quantity = 20;
    const sales = await SalesServices.updateSales(saleId, productId, quantity);
    expect(sales).to.be.an('object');
    expect(sales).to.deep.equal({ status: 'NOT_FOUND', data: { message: 'Sale not found' } });
  });
});
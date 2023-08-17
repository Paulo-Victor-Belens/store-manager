const chai = require('chai');
const sinon = require('sinon');
const SalesModel = require('../../../src/models/sales.model');
const connection = require('../../../src/models/connection');
const {
  getAllSalesFromDB,
  getAllSalesFromModel,
  getSaleByIdFromDB,
  getSaleByIdFromModel,
  insertSaleInDB,
} = require('../../mocks/mocksSalesModel');

const { expect } = chai;

describe('Products Models unit tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('get All sales should return an array of all products', async function () {
    sinon.stub(connection, 'execute').resolves(getAllSalesFromDB);
    const sales = await SalesModel.getAll();
    expect(sales).to.be.an('array');
    expect(sales).to.have.lengthOf(3);
    expect(sales).to.deep.equal(getAllSalesFromModel);
  });

  it('get sales By Id should return an object with the product', async function () {
    sinon.stub(connection, 'execute').resolves(getSaleByIdFromDB);
    const sales = await SalesModel.getById(1);
    expect(sales).to.be.an('array');
    expect(sales).to.deep.equal(getSaleByIdFromModel);
  });

  it('insertSale should return the id of the inserted sale', async function () {
    sinon.stub(connection, 'execute').resolves(insertSaleInDB);
    const sale = await SalesModel.createSales('2023-08-14T20:24:15.000Z');
    expect(sale).to.be.equal(insertSaleInDB[0].insertId);
  });

  it('create Sale should create a new product and return it', async function () {
    sinon.stub(connection, 'execute').resolves(insertSaleInDB);
    const name = 'Test Product';
    const salesCreated = await SalesModel.createSalesProducts(name);
    expect(salesCreated).to.be.an('number');
    expect(salesCreated).to.deep.equal(3);
  });
});
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const SalesService = require('../../../src/services/sales.service');
const SalesController = require('../../../src/controllers/sales.controller');
const {
  salesFromModel,
  salesByIdFromModel,
} = require('../../mocks/mocksSales');

const { expect } = chai;
chai.use(sinonChai);

describe('Products Controllers unit tests', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('findAll should be successful', async function () {
    sinon.stub(SalesService, 'findAll').resolves({ status: 'SUCCESSFUL', data: salesFromModel });
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await SalesController.show(req, res);
    expect(res.status).to.have.been.calledWith(200);
  });

  it('findById should be successful', async function () {
    sinon.stub(SalesService, 'findById').resolves({ status: 'SUCCESSFUL', data: salesByIdFromModel });
    const req = {
      params: { id: '1' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await SalesController.showById(req, res);
    expect(res.status).to.have.been.calledWith(200);
  });

  it('showById should NOT be successful', async function () {
    sinon.stub(SalesService, 'findById').resolves({ status: 'NOT_FOUND', data: { message: 'Sale not found' } });
    const req = {
      params: { id: '190' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await SalesController.showById(req, res);
    expect(res.status).to.have.been.calledWith(404);
  });

  it('create Sales should be successful', async function () {
    sinon.stub(SalesService, 'create').resolves({ status: 'CREATED', data: 1 });
    const req = {
      body: [
        {
          productId: 1,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        }],
      };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await SalesController.createSales(req, res);
    expect(res.status).to.have.been.calledWith(201);
  });

  // it('Update sales should be successful', async function () {
  //   sinon.stub(SalesService, 'update').resolves({ status: 'SUCCESSFUL', data: { id: 1, name: 'Test Product' } });
  //   const req = {
  //     params: { id: '1' },
  //     body: { name: 'Test Product' },
  //   };
  //   const res = {
  //     status: sinon.stub().returnsThis(),
  //     json: sinon.stub(),
  //   };
  //   await SalesController.updateProduct(req, res);
  //   expect(res.status).to.have.been.calledWith(200);
  // });

  // it('Update Product should NOT be successful with ID incorrect', async function () {
  //   sinon.stub(SalesService, 'update').resolves({ status: 'NOT_FOUND', data: { message: 'Product not found' } });
  //   const req = {
  //     params: { id: '190' },
  //     body: { name: 'Test Product' },
  //   };
  //   const res = {
  //     status: sinon.stub().returnsThis(),
  //     json: sinon.stub(),
  //   };
  //   await SalesController.updateProduct(req, res);
  //   expect(res.status).to.have.been.calledWith(404);
  // });
});
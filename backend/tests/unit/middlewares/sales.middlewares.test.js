const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const [
  validateBody, 
  validateSalesKeys,
  validateSalesKeys2,
  validateSalesKeys3,
  validateProductExists,
] = require('../../../src/middlewares/validationSales');

const [validateQuantity, validateQuantity2] = require('../../../src/middlewares/validationUpdateSales');

const {
  createSuccessfulSaleBodyMock,
  missingProductIdBodyMock,
  missingQuantityBodyMock,
  zeroQuantityBodyMock,
  productNotExist,
  productExist,
} = require('./salesMock');

const { expect } = chai;

chai.use(sinonChai);

describe('Sales Middlewares unit tests', function () {
  it('Testing if calling next() when req.body exists and is an array', function () {
    const req = {
      body: createSuccessfulSaleBodyMock,
    };
    const res = {};
    const next = sinon.stub().returns();

    validateBody(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Testing if calling next() when "productId" exists in every object in the array', function () {
    const req = {
      body: createSuccessfulSaleBodyMock,
    };
    const res = {};
    const next = sinon.stub().returns();

    validateSalesKeys(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Testing if responding status 400 when "productId" doesn\'t exist in every object in the array', function () {
    const req = {
      body: missingProductIdBodyMock,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validateSalesKeys(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
  });

  it('Testing if calling next() when "quantity" exists in every object in the array', function () {
    const req = {
      body: createSuccessfulSaleBodyMock,
    };
    const res = {};
    const next = sinon.stub().returns();

    validateSalesKeys3(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Testing if responding status 400 when "quantity" doesn\'t exist in every object in the array', function () {
    const req = {
      body: missingQuantityBodyMock,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validateSalesKeys3(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" is required' });
  });

  it('Testing if responding status 422 when "quantity" isn\'t greater than zero in every object in the array', function () {
    const req = {
      body: zeroQuantityBodyMock,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validateSalesKeys2(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });

  it('Testing if not all id products in DB', async function () {
    const req = {
      body: productNotExist,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    await validateProductExists(req, res, next);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('Testing if all id products in DB the next is called', async function () {
    const req = {
      body: productExist,
    };
    const res = {};
    const next = sinon.stub().returns();

    await validateProductExists(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Testing if not key quantity', async function () {
    const req = {
      body: { quanti: 1 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    await validateQuantity2(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" is required' });
  });

  it('Testing if key quantity equal 0', async function () {
    const req = {
      body: { quantity: 0 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    await validateQuantity(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });

  it('Testing if key quantity with negative quantitys', async function () {
    const req = {
      body: { quantity: -12 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    await validateQuantity(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });

  it('Testing if key quantity OK', async function () {
    const req = {
      body: { quantity: 12 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    await validateQuantity(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Testing if key quantity OK in validate2', async function () {
    const req = {
      body: { quantity: 12 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    await validateQuantity2(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('If Body.length equal a zero, return erro', async function () {
    const req = { body: [] };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await validateBody(req, res);
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: 'Empty request body' });
  });

  it('If Body not equal array, return erro', async function () {
    const req = {
      body: { name: 'Test Product' },
      };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await validateBody(req, res);
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: 'Request body must be an array' });
  });
});
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const validateProduct = require('../../../src/middlewares/validationProduct');

const { expect } = chai;

chai.use(sinonChai);

describe('validateProduct function', function () {
  it('Testing whether without the "name" key the return is 400.', function () {
    const req = {
      body: {
        name: 'Teste',
      },
    };
    const res = {};
    const next = sinon.stub().returns();

    validateProduct(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Testing whether with the "name" key having fewer than 5 characters, the return is 422', function () {
    const req = {
      body: {
        product: 'Teste',
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validateProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
  });

  it('Testing whether with everything OK, the NEXT() function is called.', function () {
    const req = {
      body: {
        name: 'Test',
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validateProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
  });
});
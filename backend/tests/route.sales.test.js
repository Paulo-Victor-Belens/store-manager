const chai = require('chai');
const chaiHttp = require('chai-http');
const mysql = require('mysql2/promise');
const sinon = require('sinon');
const {
  // salesFromModel,
  salesFromDB,
  // salesByIdFromModel,
  salesByIdFromDB,
} = require('./mocks/mocksSales');

const app = require('../src/app');
// const connection = require('../src/models/connection');
// const productsModel = require('../src/models/products.model');

const { expect } = chai;

chai.use(chaiHttp);

describe('Fazendo testes da rota SALES', function () {
  beforeEach(function () {
    const createPoolStub = sinon.stub(mysql, 'createPool');
    const dbStubes = sinon.stub();
    dbStubes.execute = sinon.stub()
    .onFirstCall()
    .resolves(salesFromDB)
    .onSecondCall()
    .resolves(salesByIdFromDB);
    createPoolStub.returns(dbStubes);
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Recuperando todas as vendas com sucesso', async function () {
    const response = await chai.request(app).get('/sales');

    expect(response.status).to.be.equal(200);
    // expect(response.body).to.be.deep.equal(salesFromModel);
  });
  
  it('Recuperando uma venda pelo id', async function () {
    const response = await chai.request(app).get('/sales/1');

    expect(response.status).to.be.equal(200);
    // expect(response.body).to.be.deep.equal(salesByIdFromModel);
    expect(response).to.be.an('object');
  });
});

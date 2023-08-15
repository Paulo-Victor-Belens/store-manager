const chai = require('chai');
const chaiHttp = require('chai-http');
const mysql = require('mysql2/promise');
const sinon = require('sinon');
const {
  // productsFromModel,
  productsFromDB,
  // productByIdFromModel,
  // productByIdFromDB,
} = require('./mocks/mocksProducts');

const app = require('../src/app');
// const connection = require('../src/models/connection');
// const productsModel = require('../src/models/products.model');

const { expect } = chai;

chai.use(chaiHttp);

describe('Fazendo testes da rota PRODUCTS', function () {
  beforeEach(function () {
    const createPoolStub = sinon.stub(mysql, 'createPool');
    const dbStubes = sinon.stub();
    dbStubes.query = sinon.stub().resolves(productsFromDB);
    createPoolStub.returns(dbStubes);
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Recuperando todos os produtos com sucesso', async function () {
    const response = await chai.request(app).get('/products');

    expect(response.status).to.be.equal(200);
    // expect(response.body).to.be.deep.equal(productsFromModel);
  });

  it('Recuperando um produto pelo id', async function () {
    const response = await chai.request(app).get('/products/1');

    expect(response.status).to.be.equal(200);
    // expect(response.body).to.be.deep.equal(productByIdFromModel);
    expect(response).to.be.an('object');
  });
});
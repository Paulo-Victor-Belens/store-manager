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

  it('Criando um prodto', async function () {
    const response = await chai.request(app).post('/products').send({
      name: 'Teste',
    });

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('id');
    expect(response.body).to.have.property('name');
  });

  it('Testando middlewares de product sem chaves corretas', async function () {
    const response = await chai.request(app).post('/products/').send({
      teste: 'Teste',
    });

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.be.equal('"name" is required');
  });

  it('Testando middlewares de product com valores com menos de 5 caracteres', async function () {
    const response = await chai.request(app).post('/products/').send({
      name: 'Test',
    });

    expect(response.status).to.be.equal(422);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.be.equal('"name" length must be at least 5 characters long');
  });
});
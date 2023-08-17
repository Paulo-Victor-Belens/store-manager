// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../src/app');
// const connection = require('../src/models/connection');
// // const salesController = require('../src/controllers/sales.controller');

// const { expect } = chai;
// chai.use(chaiHttp);
// chai.use(sinonChai);

// const {
//   salesFromModel,
//   // salesFromDB,
//   salesByIdFromModel,
//   // salesByIdFromDB,
//   salesCreatedValid,
//   // salesCreatedwithoutKeyProductId,
//   // salesCreatedwithoutKeyQuantity,
//   // salesCreatedwithtKeyQuantityEqualZero,
//   // salesCreatedwithoutProductInDB,
//   } = require('./mocks/mocksSales');

// describe('Fazendo testes da rota SALES', function () {
//   afterEach(function () {
//     sinon.restore();
//   });

//   it('Recuperando todas as vendas com sucesso', async function () {
//     sinon.stub(connection, 'execute').resolves([salesFromModel]);

//     const response = await chai.request(app).get('/sales');

//     expect(response.status).to.be.equal(200);
//     expect(response.body).to.be.deep.equal(salesFromModel);
//   });

//   it('Recuperando uma venda pelo id', async function () {
//     sinon.stub(connection, 'execute').resolves([salesByIdFromModel]);

//     const response = await chai.request(app).get('/sales/1');

//     expect(response.status).to.be.equal(200);
//     expect(response.body).to.be.deep.equal(salesByIdFromModel);
//     expect(response).to.be.an('object');
//   });

//   it('Testando rota sales por id, com id inválido', async function () {
//     sinon.stub(connection, 'execute').resolves([[]]);
  
//     const response = await chai.request(app).get('/sales/289');
  
//     expect(response.status).to.be.equal(404);
//     expect(response.body).to.be.an('object');
//     expect(response.body).to.have.property('message');
//     expect(response.body.message).to.be.equal('Sale not found');
//   });

//   it('Testando se quando for criada uma venda, o status é 201', async function () {
//     sinon.stub(connection, 'execute')
//     .onFirstCall()
//     .resolves([[salesCreatedValid[0]]])
//     .onSecondCall()
//     .resolves([[salesCreatedValid[1]]])
//     .onThirdCall()
//     .resolves([{ insertId: 1 }]);

//     const response = await chai.request(app).post('/sales').send(salesCreatedValid);

//     expect(response.status).to.be.equal(201);
//     expect(response.body).to.be.an('object');
//     expect(response.body).to.have.property('id');
//     expect(response.body).to.have.property('itemsSold');
//     expect(response.body.itemsSold).to.have.length(2);
//   });

//   // it('Testando se quando for criada uma venda sem a chave productId, o status é 400', async function () {
//   //   const response = await chai.request(app).post('/sales').send(salesCreatedwithoutKeyProductId);

//   //   expect(response.status).to.be.equal(400);
//   //   expect(response.body).to.be.an('object');
//   //   expect(response.body).to.have.property('message');
//   //   expect(response.body.message).to.be.equal('"productId" is required');
//   // });

//   // it('Testando se quando for criada uma venda sem a chave quantity, o status é 400', async function () {
//   //   const response = await chai.request(app).post('/sales').send(salesCreatedwithoutKeyQuantity);

//   //   expect(response.status).to.be.equal(400);
//   //   expect(response.body).to.be.an('object');
//   //   expect(response.body).to.have.property('message');
//   //   expect(response.body.message).to.be.equal('"quantity" is required');
//   // });

//   // it('Testando se quando for criada uma venda com a chave quantity igual a zero, o status é 422', async function () {
//   //   const response = await chai.request(app).post('/sales').send(salesCreatedwithtKeyQuantityEqualZero);

//   //   expect(response.status).to.be.equal(422);
//   //   expect(response.body).to.be.an('object');
//   //   expect(response.body).to.have.property('message');
//   //   expect(response.body.message).to.be.equal('"quantity" must be greater than or equal to 1');
//   // });

//   // it('Testando se quando for criada uma venda sem o produto no banco de dados, o status é 404', async function () {
//   //   sinon.stub(connection, 'execute')
//   //   .onFirstCall()
//   //   .resolves([[]])
//   //   .onSecondCall()
//   //   .resolves([[salesCreatedValid[1]]])
//   //   .onThirdCall()
//   //   .resolves([{ insertId: 1 }]);

//   //   const response = await chai.request(app).post('/sales').send(salesCreatedwithoutProductInDB);

//   //   expect(response.status).to.be.equal(404);
//   //   expect(response.body).to.be.an('object');
//   //   expect(response.body).to.have.property('message');
//   //   expect(response.body.message).to.be.equal('Product not found');
//   // });

//   it('Testando se quando for criada uma venda sem nenhum produto, o status é 400', async function () {
//     const response = await chai.request(app).post('/sales').send([]);

//     expect(response.status).to.be.equal(400);
//     expect(response.body).to.be.an('object');
//     expect(response.body).to.have.property('message');
//     expect(response.body.message).to.be.equal('Empty request body');
//   });

//   it('Testando se quando for criada uma venda com algo que não seja um array, o status é 400', async function () {
//     const response = await chai.request(app).post('/sales').send({});

//     expect(response.status).to.be.equal(400);
//     expect(response.body).to.be.an('object');
//     expect(response.body).to.have.property('message');
//     expect(response.body.message).to.be.equal('Request body must be an array');
//   });
// });

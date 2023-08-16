// const chai = require('chai');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
// const ProductsServices = require('../../../src/services/product.service');
// const ProductsControllers = require('../../../src/controllers/products.controller');
// const {
//   productsFromModel,
//   // productsFromDB,
//   productByIdFromModel,
//   // productByIdFromDB,
// } = require('../../mocks/mocksProducts');

// const { expect } = chai;
// chai.use(sinonChai);

// describe('Products Controllers unit tests', function () {
//   afterEach(function () {
//     sinon.restore();
//   });
//   it('findAll should be successful', async function () {
//     sinon.stub(ProductsServices, 'findAll').resolves({ status: 'SUCCESSFUL', data: productsFromModel });
//     const req = {};
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };
//     await ProductsControllers.show(req, res);
//     expect(res.status).to.have.been.calledWith(200);
//   });

//   it('findById should be successful', async function () {
//     sinon.stub(ProductsServices, 'findById').resolves({ status: 'SUCCESSFUL', data: productByIdFromModel });
//     const req = {
//       params: { id: '1' },
//     };
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };
//     await ProductsControllers.showById(req, res);
//     expect(res.status).to.have.been.calledWith(200);
//   });

//   it('showById should NOT be successful', async function () {
//     sinon.stub(ProductsServices, 'findById').resolves({ status: 'NOT_FOUND', data: { message: 'Product not found' } });
//     const req = {
//       params: { id: '190' },
//     };
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };
//     await ProductsControllers.showById(req, res);
//     expect(res.status).to.have.been.calledWith(404);
//   });

//   it('create Product should be successful', async function () {
//     sinon.stub(ProductsServices, 'create').resolves({ status: 'CREATED', data: 1 });
//     const req = {
//       body: { name: 'Test Product' },
//     };
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };
//     await ProductsControllers.createProduct(req, res);
//     expect(res.status).to.have.been.calledWith(201);
//   });

//   it('Update Product should be successful', async function () {
//     sinon.stub(ProductsServices, 'update').resolves({ status: 'SUCCESSFUL', data: { id: 1, name: 'Test Product' } });
//     const req = {
//       params: { id: '1' },
//       body: { name: 'Test Product' },
//     };
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };
//     await ProductsControllers.updateProduct(req, res);
//     expect(res.status).to.have.been.calledWith(200);
//   });

//   it('Update Product should NOT be successful with ID incorrect', async function () {
//     sinon.stub(ProductsServices, 'update').resolves({ status: 'NOT_FOUND', data: { message: 'Product not found' } });
//     const req = {
//       params: { id: '190' },
//       body: { name: 'Test Product' },
//     };
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };
//     await ProductsControllers.updateProduct(req, res);
//     expect(res.status).to.have.been.calledWith(404);
//   });
// });
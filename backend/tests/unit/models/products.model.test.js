// const { expect } = require('chai');
// const sinon = require('sinon');
// const productsModels = require('../../../src/models/products.models');
// const connection = require('../../../src/configs/connection');
// const {
//   getAllProductsFromDB,
//   getAllProductsFromModel,
//   getProductByIdFromDB,
//   getProductByIdFromModel,
//   createProductFromDB,
//   createProductFromModel,
// } = require('../mocks/models/products.models.mocks');

// // mocks

// describe('Products Models unit tests', function () {
//   afterEach(function () {
//     sinon.restore();
//   });

//   it('getAllProducts should return an array of all products', async function () {
//     sinon.stub(connection, 'execute').resolves(getAllProductsFromDB);
//     const products = await productsModels.getAllProducts();
//     expect(products).to.be.an('array');
//     expect(products).to.have.lengthOf(3);
//     expect(products).to.deep.equal(getAllProductsFromModel);
//   });

//   it('getProductById should return an object with the product', async function () {
//     sinon.stub(connection, 'execute').resolves(getProductByIdFromDB);
//     const product = await productsModels.getProductById(1);
//     expect(product).to.be.an('object');
//     expect(product).to.deep.equal(getProductByIdFromModel);
//   });

//   it('createProduct should create a new product and return it', async function () {
//     sinon.stub(connection, 'execute').resolves(createProductFromDB);
//     const productObj = { name: 'Test Product' };
//     const productCreated = await productsModels.createProduct(productObj);
//     expect(productCreated).to.be.an('object');
//     expect(productCreated).to.deep.equal(createProductFromModel);
//   });
// });
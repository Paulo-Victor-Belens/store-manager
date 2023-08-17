const camelize = require('camelize');
const connection = require('./connection');

async function getAll() {
  const [rows] = await connection.execute(`SELECT sp.sale_id, s.date, sp.product_id, sp.quantity 
  FROM sales s 
  INNER JOIN sales_products sp 
  ON s.id = sp.sale_id
  ORDER BY sale_id, product_id;`);
  
  return camelize(rows);
}

async function getById(id) {
  const [rows] = await connection.execute(`SELECT s.date, sl.product_id, sl.quantity
  FROM sales s
  INNER JOIN sales_products sl ON sl.sale_id = s.id
  INNER JOIN products p ON sl.product_id = p.id
  WHERE sl.sale_id = ?
  `, [id]);

  return camelize(rows);
}

// passar a data atual da venda como parametro
async function createSales(date) {
  const [{ insertId }] = await connection.execute(`INSERT INTO 
  sales (date) VALUES (?)`, [date]);
  return camelize(insertId);
}

async function createSalesProducts(saleId, productId, quantity) {
  const [{ insertId }] = await connection.execute(`INSERT INTO
  sales_products (sale_id, product_id, quantity) 
  VALUES (?, ?, ?)`, [saleId, productId, quantity]);
  return camelize(insertId);
}

async function deleteSales(id) {
  const [rows] = await connection.execute(`DELETE FROM
  sales WHERE id = ?`, [id]);
  console.log(rows);
  return camelize(rows.affectedRows);
}

async function updateSales(saleId, productId, quantity) {
  await connection.execute(`UPDATE sales_products
  SET quantity = ?
  WHERE sale_id = ? AND product_id = ?`, [quantity, saleId, productId]);

  const salesExsists = await getById(saleId);
  return camelize(salesExsists[0].date);
}

module.exports = {
  getAll,
  getById,
  createSales,
  createSalesProducts,
  deleteSales,
  updateSales,
};

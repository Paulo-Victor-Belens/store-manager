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

// async function updateQuantity(sale) {
//   const [rows] = await connection.execute(`UPDATE products 
//   SET quantity = quantity - ? WHERE id = ?`, [sale.quantity, sale.product_id]);
//   return camelize(rows);
// }

   // async update(id, name, quantity) {
  //   const [result] = await this.connection.execute(
  //     'UPDATE sales SET name = ?, quantity = ? WHERE id = ?',
  //     [name, quantity, id]
  //   );
  //   return result;
  // }

  // async delete(id) {
  //   const [result] = await this.connection.execute(
  //     'DELETE FROM sales WHERE id = ?',
  //     [id]
  //   );
  //   return result;
  // }

module.exports = {
  getAll,
  getById,
  createSales,
  createSalesProducts,
};

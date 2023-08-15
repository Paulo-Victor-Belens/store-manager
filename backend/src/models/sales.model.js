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

  // async create(name, quantity) {
  //   const [result] = await this.connection.execute(
  //     'INSERT INTO sales (name, quantity) VALUES (?, ?)',
  //     [name, quantity]
  //   );
  //   return result;
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
};

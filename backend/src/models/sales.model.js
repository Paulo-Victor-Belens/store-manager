const camelize = require('camelize');
const connection = require('./connection');

async function getAll() {
  const [rows] = await connection.execute(
    'SELECT * FROM sales ORDER BY id ASC',
  );
  
  const rowsCamelize = camelize(rows);
  return rowsCamelize;
}

async function getById(id) {
  const [rows] = await connection.execute(
    'SELECT * FROM sales WHERE id = ?',
    [id],
  );

  const rowsCamelize = camelize(rows);

  return rowsCamelize[0];
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

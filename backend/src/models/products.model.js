const camelize = require('camelize');
const connection = require('./connection');

  async function getAll() {
    const [rows] = await connection.execute('SELECT * FROM products');
    const rowsCamelize = camelize(rows);
    return rowsCamelize;
  }

  async function getById(id) {
    const [rows] = await connection.execute(
      'SELECT * FROM products WHERE id = ?',
      [id],
    );

    const rowsCamelize = camelize(rows);

    return rowsCamelize[0];
  }

  async function createInDB(name) {
    const [{ insertId }] = await connection.execute(
      'INSERT INTO products (name) VALUES (?)',
      [name],
    );

    return insertId;
  }

  // async update(id, name, quantity) {
  //   const [result] = await this.connection.execute(
  //     'UPDATE products SET name = ?, quantity = ? WHERE id = ?',
  //     [name, quantity, id]
  //   );
  //   return result;
  // }

  // async delete(id) {
  //   const [result] = await this.connection.execute(
  //     'DELETE FROM products WHERE id = ?',
  //     [id]
  //   );
  //   return result;
  // }

module.exports = {
  getAll,
  getById,
  createInDB,
};

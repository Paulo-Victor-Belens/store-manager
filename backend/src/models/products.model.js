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

  async function getBySearch(name) {
    const [rows] = await connection.execute(
      'SELECT * FROM products WHERE name LIKE ?',
      [`%${name}%`],
    );

    const rowsCamelize = camelize(rows);

    return rowsCamelize;
  }

  async function createInDB(name) {
    const [{ insertId }] = await connection.execute(
      'INSERT INTO products (name) VALUES (?)',
      [name],
    );

    return insertId;
  }

  async function updateInDB(id, name) {
    const rows = await connection.execute(
      'UPDATE products SET name = ? WHERE id = ?',
      [name, id],
    );

    return rows;
  }

  async function deleteInDB(id) {
    const [result] = await connection.execute(
      'DELETE FROM products WHERE id = ?',
      [id],
    );

    return result;
  }

module.exports = {
  getAll,
  getById,
  createInDB,
  updateInDB,
  deleteInDB,
  getBySearch,
};

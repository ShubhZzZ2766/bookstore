const db = require('../config/db');

exports.getAllBooks = (callback) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

exports.getBookById = (id, callback) => {
  db.query('SELECT * FROM books WHERE id = ?', [id], (err, result) => {
    if (err) return callback(err);
    callback(null, result[0]);
  });
};

exports.addBook = (book, callback) => {
  const { title, author, price } = book;
  db.query('INSERT INTO books (title, author, price) VALUES (?, ?, ?)', [title, author, price], (err, result) => {
    if (err) return callback(err);
    callback(null, result.insertId);
  });
};

exports.deleteBook = (id, callback) => {
  db.query('DELETE FROM books WHERE id = ?', [id], (err, result) => {
    if (err) return callback(err);
    callback(null, result.affectedRows);
  });
};

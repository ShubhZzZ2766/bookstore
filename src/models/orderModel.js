const db = require('../config/db');

exports.placeOrder = (userId, callback) => {
  db.query('INSERT INTO orders (user_id, total_price) SELECT c.user_id, SUM(ci.quantity * b.price) FROM cart_items ci JOIN books b ON ci.book_id = b.id JOIN cart c ON c.id = ci.cart_id WHERE c.user_id = ?', [userId], (err, result) => {
    if (err) return callback(err);
    callback(null, result.insertId);
  });
};

exports.getOrderHistory = (userId, callback) => {
  db.query('SELECT * FROM orders WHERE user_id = ?', [userId], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

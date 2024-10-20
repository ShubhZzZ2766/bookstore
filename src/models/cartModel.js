const db = require('../config/db');

exports.getCart = (userId, callback) => {
  db.query('SELECT * FROM cart_items WHERE cart_id = (SELECT id FROM cart WHERE user_id = ?)', [userId], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

exports.addToCart = (userId, bookId, quantity, callback) => {
    // First, check if the user has a cart; if not, create one
    db.query('SELECT id FROM cart WHERE user_id = ?', [userId], (err, results) => {
      if (err) return callback(err);
      
      let cartId;
      if (results.length === 0) {
        // If the user has no cart, create one
        db.query('INSERT INTO cart (user_id) VALUES (?)', [userId], (err, result) => {
          if (err) return callback(err);
          cartId = result.insertId;
  
          // Now insert the item into the cart
          db.query('INSERT INTO cart_items (cart_id, book_id, quantity) VALUES (?, ?, ?)', [cartId, bookId, quantity], (err, result) => {
            if (err) return callback(err);
            callback(null, result.insertId);
          });
        });
      } else {
        // If the cart exists, use the existing cart_id
        cartId = results[0].id;
        db.query('INSERT INTO cart_items (cart_id, book_id, quantity) VALUES (?, ?, ?)', [cartId, bookId, quantity], (err, result) => {
          if (err) return callback(err);
          callback(null, result.insertId);
        });
      }
    });
  };
  

exports.removeFromCart = (itemId, callback) => {
  db.query('DELETE FROM cart_items WHERE id = ?', [itemId], (err, result) => {
    if (err) return callback(err);
    callback(null, result.affectedRows);
  });
};

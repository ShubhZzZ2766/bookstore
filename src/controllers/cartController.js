const Cart = require('../models/cartModel');

// Get cart details for authenticated user
exports.getCart = (req, res) => {
  const userId = req.userId;
  Cart.getCart(userId, (err, cartItems) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(cartItems);
  });
};

// Add book to cart
exports.addToCart = (req, res) => {
  const userId = req.userId;
  const { bookId, quantity } = req.body;
  Cart.addToCart(userId, bookId, quantity, (err, itemId) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ message: 'Item added to cart', itemId });
  });
};

// Remove book from cart
exports.removeFromCart = (req, res) => {
  const itemId = req.params.itemId;
  Cart.removeFromCart(itemId, (err, rowsAffected) => {
    if (err) return res.status(500).send(err);
    if (rowsAffected === 0) return res.status(404).send('Item not found');
    res.status(200).json({ message: 'Item removed from cart' });
  });
};

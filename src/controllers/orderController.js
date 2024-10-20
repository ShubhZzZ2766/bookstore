const Order = require('../models/orderModel');

// Place an order for the authenticated user
exports.placeOrder = (req, res) => {
  const userId = req.userId;
  Order.placeOrder(userId, (err, orderId) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ message: 'Order placed', orderId });
  });
};

// View order history
exports.getOrderHistory = (req, res) => {
  const userId = req.userId;
  Order.getOrderHistory(userId, (err, orders) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(orders);
  });
};

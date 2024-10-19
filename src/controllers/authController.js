const bcrypt = require('bcryptjs');
const db = require('../config/db');
const jwt = require('jsonwebtoken');


exports.register = (req, res) => {
  const { username, password } = req.body;

  // Hash password
  bcrypt.hash(password, 8, (err, hashedPassword) => {
    if (err) return res.status(500).send(err);

    // Insert user into the database
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (error, result) => {
      if (error) return res.status(500).send(error);
      res.status(201).send('User registered successfully');
    });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
    if (error) return res.status(500).send(error);
    if (results.length === 0) return res.status(404).send('User not found');

    const user = results[0];

    // Compare passwords
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) return res.status(401).send('Invalid credentials');

      // Create token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    });
  });
};

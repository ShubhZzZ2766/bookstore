const Book = require('../models/bookModel');

// List all books
exports.getAllBooks = (req, res) => {
  Book.getAllBooks((err, books) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(books);
  });
};

// Get book details by ID
exports.getBookById = (req, res) => {
  const bookId = req.params.id;
  Book.getBookById(bookId, (err, book) => {
    if (err) return res.status(500).send(err);
    if (!book) return res.status(404).send('Book not found');
    res.status(200).json(book);
  });
};

// Add a new book (Admin feature)
exports.addBook = (req, res) => {
  const bookData = req.body;
  Book.addBook(bookData, (err, bookId) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ message: 'Book added', bookId });
  });
};

// Delete a book (Admin feature)
exports.deleteBook = (req, res) => {
  const bookId = req.params.id;
  Book.deleteBook(bookId, (err, rowsAffected) => {
    if (err) return res.status(500).send(err);
    if (rowsAffected === 0) return res.status(404).send('Book not found');
    res.status(200).json({ message: 'Book deleted' });
  });
};

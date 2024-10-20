# Bookstore API

## Overview

The **Bookstore API** is a RESTful API built with Node.js and Express.js that allows users to manage a bookstore's functionalities, including user authentication, book management, cart handling, and order processing.

## Features

- User authentication using JWT (JSON Web Tokens)
- Secure password storage using bcrypt
- CRUD operations for books
- Cart management
- Order processing
- Environment variable configuration using dotenv

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.x or later)
- npm (Node package manager)

### Cloning the Repository

To clone the repository, use the following command:

```bash
git clone https://github.com/ShubhZzZ2766/bookstore.git
cd bookstore-api
```

### Installation

Install the required dependencies:

```bash
npm install
```

Create a `.env` file in the root directory and add the following environment variables:

```
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret
```

Replace the placeholder values with your actual database and JWT secret values.

### Running the Application

To start the server, run the following command:

```bash
npm start
```

The server will be running on `http://localhost:3000` by default. You can change the port in your application configuration if needed.

## API Endpoints

Below are some of the key API endpoints available in the application:

### Authentication

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Log in an existing user

### Books

- **GET /api/books**: Retrieve a list of all books
- **GET /api/books/:id**: Retrieve a book by its ID
- **POST /api/books**: Add a new book
- **PUT /api/books/:id**: Update a book by its ID
- **DELETE /api/books/:id**: Delete a book by its ID

### Cart

- **GET /api/cart**: Retrieve user's cart
- **POST /api/cart**: Add an item to the cart
- **DELETE /api/cart/:id**: Remove an item from the cart

### Orders

- **GET /api/orders**: Retrieve user's orders
- **POST /api/orders**: Place a new order

## Testing

As of now, no tests are specified in the project. You can add tests later by creating appropriate test files and running them using a testing framework.

```bash
npm test
```

## Project Structure

Here is a brief overview of the project structure:

```
bookstore-api/
├── src/
│   ├── app.js            # Main application file
│   ├── routes/           # API route handlers
│   ├── controllers/      # Business logic for routes
│   ├── models/           # Database models
│   ├── middleware/       # Middleware functions
│   └── config/           # Configuration files
├── .env                  # Environment variables
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Scripts

The following scripts are available in this project:

- **start**: Starts the application using nodemon for automatic server restarts on file changes.
- **test**: Placeholder script for running tests.


## Acknowledgements

- **Express.js** - Web framework for Node.js
- **jsonwebtoken** - Implementation of JSON Web Tokens
- **bcryptjs** - Library for hashing passwords
- **mysql2** - MySQL client for Node.js
const express = require('express');
const bookRoute = express.Router();
const {
  addbook,
  updateBook,
  getAllboks,
  getBooks,
  filterbooks,
  Deletebooks,
} = require('../Controller/books');
const authmiddleware = require('../middleware/Middleware');

bookRoute.post('/add', authmiddleware, addbook);
bookRoute.put('/update/:id', authmiddleware, updateBook);
bookRoute.get('/get/:id', authmiddleware, getBooks);
bookRoute.get('/getall', authmiddleware, getAllboks);
bookRoute.get('/filter', authmiddleware, filterbooks);
bookRoute.delete('/delete/:id', authmiddleware, Deletebooks);

module.exports = bookRoute;

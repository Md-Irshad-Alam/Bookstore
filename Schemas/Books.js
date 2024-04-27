const mongoose = require('mongoose');
const bookschemas = new mongoose.Schema(
  {
    title: { type: String, requiredd: true },
    author: { type: String, requiredd: true },
    publicaton_years: { type: Number, requiredd: true },
    users: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  },
  {
    timestamps: true,
  }
);
const booksstore = mongoose.model('books', bookschemas);
module.exports = booksstore;

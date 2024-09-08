const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  brand: String,
  stock: Number,
});

module.exports = mongoose.model('Item', itemSchema);

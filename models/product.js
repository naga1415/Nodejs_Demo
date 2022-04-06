const mongoose = require('mongoose');
const schema = new mongoose.Schema({ name: 'string', cost: 'number', desc: 'string' });
const Products = mongoose.model('Products', schema);    

module.exports = Products

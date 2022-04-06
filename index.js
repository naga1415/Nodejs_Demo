const express = require('express')
const mongoose = require('mongoose');
const Products = require('./models/product')
mongoose.connect('mongodb://localhost:27017/Ecommerce');
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(3001, (err) => {
    if (err) throw err
    console.log('Server running in http://127.0.0.1:3001')
})


app.use("/products", require("./routes/products"));
//app.use("/payments", require("./routes/payments"));


module.exports = app


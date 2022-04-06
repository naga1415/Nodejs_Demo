const Products = require("../models/product");


var obj = {
    create: (req, res) => {
        console.log(req.body)
        Products.create(req.body, function (err, result) {
            if (err) {
                console.log(err);
                res.send(err)
            }
            else {
                console.log(result)
                res.send('created')
            }
        })
    },
    getAllProducts: (req, res) => {
        Products.find({
            cost: { $gt: 800 }

        }, function (err, data) {
            res.send(data)
            console.log(">>>> " + data);
        });
    },
    update: (req, res) => {
        Products.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
            if (!err) {
                res.send('updated')
            }
            else {
                res.send(err)
            }
        })
    },
    deleteById: (req, res) => {
        Products.findByIdAndDelete(req.params.id, function (err) {
            if (!err) {
                res.send('deleted')
            }
            else {
                res.send(err)
            }
        });

    },
    deleteAll: (req, res) => {
        Products.remove({}, function (err) {
            if (!err) {
                res.send('all deleted')
            }
            else {
                res.send(err)
            }
        });
    }
}

module.exports = obj;








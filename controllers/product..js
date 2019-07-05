const Product = require('../models/product');

//Simple version, without validation or sanitation
exports.test = function (req, res) {

    res.send('Greetings from the Test controller!');

};

exports.productCreate = function (req, res, next) {

    try {

        let product = new Product(
            {
                name: req.body.name,
                price: req.body.price
            }
        );

        product.save(function (err) {

            if (err) {
                return next(err);
            }

            res.send('Product Created successfully')

        });

    } catch (error) {
        return res.send(res);
    }
};


exports.getAllProducts = function (req, res, next) {

    Product.find({}, function (err, products) {
        if (err) return next(err);
        res.send(products);
    });

};
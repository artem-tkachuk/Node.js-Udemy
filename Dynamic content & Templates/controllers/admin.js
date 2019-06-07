const Product = require('../models/product');




exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        const productsObject = {
            prods: products,
            pageTitle: 'Admin products',
            path: '/admin/products'
        }
        res.render('admin/products', productsObject);
    });
};


exports.getAddProduct = (req, res, next) => {
    const parameters = {
        pageTitle: 'Add product',
        path: '/admin/add-product',
    };
    res.render('admin/add-product', parameters);
};


exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title, req.body.imageUrl, req.body.description, req.body.price);

    product.save();
    res.redirect('/');
};
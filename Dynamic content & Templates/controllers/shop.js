const Product = require('../models/product');



exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        const productsObject = {
            prods: products,
            pageTitle: 'All products',
            path: '/products'
        }
        res.render('shop/product-list', productsObject);
    });
};


exports.getProduct = (req, res, next) => {
    const prodID = req.params.productID;
    Product.findById(prodID, product => {
        const parameters = {
            pageTitle: product.title,
            path: '/products',
            product: product
        };
        res.render('shop/product-detail', parameters);
    });

};


exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        const parameters = {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        }
        res.render('shop/index', parameters);
    });
};


exports.getCart = (req, res, next) => {
    const parameters = {
        pageTitle: 'Your cart',
        path: '/cart'
    };
    res.render('shop/cart', parameters);
};


exports.getCheckout = (req, res, next) => {
    const parameters = {
        pageTitle: 'Checkout',
        path: '/checkout'
    };
    res.render('shop/checkout', parameters)
};


exports.getOrders = (req, res, next) => {
    const parameters = {
        pageTitle: 'Your orders',
        path: '/orders'
    };
    res.render('shop/orders', parameters);
};
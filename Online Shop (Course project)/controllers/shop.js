const Product = require('../models/product');
const Cart = require('../models/cart');


exports.getProducts = (req, res, next) => {

    Product.fetchAll()
        .then(([rows, fieldData]) => {

            const parameters = {
                prods: rows,
                pageTitle: 'All products',
                path: '/products'
            };

            res.render('shop/product-list', parameters);

        })

        .catch(err => console.log(err));
};


exports.getProduct = (req, res, next) => {

    const prodID = req.params.productID;

    Product.findById(prodID)
        //TODO fix if there is no product with this id
        .then(([product]) => {

            const parameters = {
                pageTitle: product.title,
                path: '/products',
                product: product[0]
            };

            res.render('shop/product-detail', parameters);
        })
        .catch(err => res.redirect('/404'));

};


exports.getIndex = (req, res, next) => {

    Product.fetchAll()
        .then(([rows, fieldData]) => {

            const parameters = {
                prods: rows,
                pageTitle: 'Shop',
                path: '/'
            }

            res.render('shop/index', parameters);

        })

        .catch((err) => console.log(err));
};


exports.getCart = (req, res, next) => {

    Cart.getCart(cart => {

        Product.fetchAll(products => {

            const cartProducts = [];

            for (product of products) {

                const cartProductData = cart.products.find(prod => prod.id === product.id);

                if (cartProductData) {
                    cartProducts.push({productData: product, quantity: cartProductData.quantity});
                }
            }

            const parameters = {
                pageTitle: 'Your cart',
                path: '/cart',
                products: cartProducts
            };

            res.render('shop/cart', parameters);

        });

    });

};


exports.postCart = (req, res, next) => {
    const prodID = req.body.productID;
    Product.findById(prodID, (product) => {
        Cart.addProduct(product.id, product.price);
    });
    res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
    const productID = req.body.productID;

    Product.findById(productID, (product) => {
        Cart.deleteProduct(productID, product.price);
        res.redirect('/cart');
    });

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
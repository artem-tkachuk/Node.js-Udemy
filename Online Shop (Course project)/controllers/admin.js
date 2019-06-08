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
        editing: false
    };

    res.render('admin/edit-product', parameters);

};


exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title, req.body.imageUrl, req.body.description, req.body.price);

    product.save();

    res.redirect('/');

};


exports.getEditProduct = (req, res, next) => {

    const editMode = req.query.edit;

    if (!editMode) {
        return res.redirect('/');   //TODO fix this URL
    }

    const prodID = req.params.productID;

    Product.findById(prodID, (product) => {

        if (!product) {
            return res.redirect('/');   //TODO fix this URL
        }

        const parameters = {
            pageTitle: 'Edit product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        };

        res.render('admin/edit-product', parameters);
    });

};


exports.postEditProduct = (req, res, next) => {

    //TODO make it so the update button is not active until the admin changes something

    const prodID = req.body.productID;

    Product.findById(prodID, (product) => {

        product.title = req.body.title;
        product.imageUrl = req.body.imageUrl;
        product.price = req.body.price;
        product.description = req.body.description;

        product.saveEdit();

        res.redirect('/admin/products');

    });

};
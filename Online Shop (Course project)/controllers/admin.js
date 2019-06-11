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

    const product = new Product(null, req.body.title, req.body.imageUrl, req.body.description, req.body.price);

    product.save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err));

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

    const updatedProduct = new Product(req.body.productID, req.body.title, req.body.imageUrl, req.body.description, req.body.price);

    updatedProduct.save();

    res.redirect('/admin/products');

};



exports.postDeleteProduct = (req, res, next) => {

    //TODO what if this product does not exist in the db? I mean hard typing the URL can crash everything

    Product.deleteById(req.body.productID);

    res.redirect('/admin/products');


};
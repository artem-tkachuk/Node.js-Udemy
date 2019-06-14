const Product = require('../models/product');




exports.getProducts = (req, res, next) => {

    req.user.getProducts()

        .then(products => {
            const parameters = {
                prods: products,
                pageTitle: 'Admin products',
                path: '/admin/products'
            }
            res.render('admin/products', parameters);
        })

        .catch(err => console.log(err));
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

    const updatedProductData = {
        title: req.body.title,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
    };

    req.user.createProduct(updatedProductData)
        .then((result) => {
            console.log('Added product');
            res.redirect('/admin/products');
        })
        .catch(err => console.log(err));

    /*const product = new Product(null, req.body.title, req.body.imageUrl, req.body.description, req.body.price);

    product.save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
*/
};



exports.getEditProduct = (req, res, next) => {

    const editMode = req.query.edit;

    if (!editMode) {
        return res.redirect('/');   //TODO fix this URL
    }

    const prodID = req.params.productID;

    req.user.getProducts({
        where: {
            id: prodID
        }
    })
    //Product.findByPk(prodID)
        .then(products => {
            const product = products[0];

            if(!product) {
                return res.redirect('/');
            }

            const parameters = {
                pageTitle: 'Edit product',
                path: '/admin/edit-product',
                editing: editMode,
                product: product
            };

            res.render('admin/edit-product', parameters);
         })

        .catch(err => res.redirect('/'))
};

exports.postEditProduct = (req, res, next) => {

    //TODO make it so the update button is not active until the admin changes something
    const prodID = req.body.productID;

    Product.findByPk(prodID)
        .then((product) => {
            product.title = req.body.title,
            product.price = req.body.price,
            product.imageUrl = req.body.imageUrl,
            product.description = req.body.description

            return product.save();
        })

        .then((result) => {
            console.log('UPDATED PRODUCT!');
            res.redirect('/admin/products');
        })

        .catch((err) => console.log(err));

};



exports.postDeleteProduct = (req, res, next) => {

    //TODO what if this product does not exist in the db? I mean hard typing the URL can crash everything

    /*Product.destroy({
        where: {
            id: req.body.productID
        }
    })*/

    const prodID = req.body.productID;

    Product.findByPk(prodID)
        .then((result) => {
            res.redirect('/admin/products');
        })
        .catch(err => console.log(err));
};
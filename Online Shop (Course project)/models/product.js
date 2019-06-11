/*const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');
const p = path.join(rootDir, 'data', 'products.json');*/
const db = require('../util/database');

const Cart = require('./cart');

/*const getProductsFromFile = callback => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return callback([]);
        }
        callback(JSON.parse(fileContent));
    });
};*/

module.exports = class Product {

    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        /*getProductsFromFile(products => {

            if (this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;

                fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                    if (err) {
                        console.log(err);
                    }
                });

            } else {

                this.id = Math.random().toString();

                products.push(this);

                fs.writeFile(p, JSON.stringify(products), (err) => {
                    if (err) {
                        console.log(err);
                    }
                });

            }
        });*/
        return db.execute(
            'INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
            [this.title, this.price, this.description, this.imageUrl]
        );
    }

    static deleteById(id) {
        /*getProductsFromFile(products => {

            const product = products.find(prod => prod.id === id);

            const updatedProducts = products.filter(prod => prod.id !== id);

            fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                if (!err) {
                    Cart.deleteProduct(id, product.price);
                }
            });

        });*/
    }

    static fetchAll() {
        /*getProductsFromFile(callback);*/
        return db.execute(`SELECT * FROM products`);
    }

    static findById(id) {
        /*getProductsFromFile(products => {
             const product = products.find(p => p.id === id);
             callback(product);
        });*/
        return db.execute(`SELECT * FROM products WHERE products.id = ?`, [id]);
    }

};
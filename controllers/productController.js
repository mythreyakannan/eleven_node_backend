const { model } = require('mongoose');
const {Product, validate} = require('../models/product');



const addProduct = async (req, res, next) => {
        const {error} =  validate(req.body);
        if(error) return res.status(422).send(error.details[0].message);

        let product = new Product({
            Pname: req.body.Pname,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        });

        product =  await product.save(); 
        res.send(product);
}

const getProduct = async (req, res, next) => {
    const products = await Product.find().sort('name').exec();
    res.send(products);
}


const updateProduct = async (req, res, next) => {
    const {error} = validate(req.body);
    if(error) return res.status(422).send(error.details[0].message);

    let product = await Product.findByIdAndUpdate(req.params.id, {
        Pname: req.body.Pname,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    }, {new: true});

    if(!product) return res.status(401).send('The Product with the given id not found');
    res.send(product);
}

const deleteProduct = async (req, res, next) => {
    const product = await Product.findByIdAndRemove(req.params.id);
    if(!product) return res.status(401).send('The Product with the given id not found');
    res.send(product);
}


module.exports = {
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
}
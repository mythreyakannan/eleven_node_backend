const express = require('express');
const auth = require('../middleware/auth');
const {addProduct, getProduct, updateProduct, deleteProduct} = require('../controllers/productController');

const router = express.Router();

router.post('/product', auth, addProduct);
router.get('/product', auth,  getProduct);
router.put('/product/:id', auth, updateProduct);
router.delete('/product/:id', auth, deleteProduct);


module.exports = {
    routes: router
}
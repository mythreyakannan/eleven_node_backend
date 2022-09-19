const express = require('express');
const {login, status} = require('../controllers/authController');
const router = express.Router();


router.post('/login', login);
router.get('/status', status);

module.exports = {
    routes: router
}
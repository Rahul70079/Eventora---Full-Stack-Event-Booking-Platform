const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/authController');

routeter.post('/register', registerUser);
router.post('/login', loginUser);
router.po
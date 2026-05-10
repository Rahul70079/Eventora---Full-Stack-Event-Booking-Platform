const express = require('express');
const router = express.Router();
const {registerUser, loginUser, verifyOtp} = require('../controllers/authController');

routeter.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', (req, res) => {
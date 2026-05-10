const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/authController');

roter.post('/register', (req, res) => {
    // Registration logic here
    res.send('User registered');
}
);
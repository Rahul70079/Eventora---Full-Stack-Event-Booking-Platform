const user = require('../models/User');


//Register User
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        
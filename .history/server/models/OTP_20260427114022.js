const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: { type: String,
         required: true 
        },
        
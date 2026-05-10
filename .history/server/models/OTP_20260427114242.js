const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: { type: String,
         required: true 
        },
    otp: { type: String,
        required: true
    },
    action: {
         type: String,
            enum: ['account_verification', 'event'],
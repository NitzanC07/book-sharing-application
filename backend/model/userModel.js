const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your E-mail'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    },
    city: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    social: {
        type: String,
        required: false
    }, 
    imageUrl: {
        type: String,
        default: 'Profile picture'
    },
    rating: {
        type: Number,
        default: 0
    },
    feedback: {
        type: Array,
        default: []
    },
    wishlist: {
        type: Array,
        default: []
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)

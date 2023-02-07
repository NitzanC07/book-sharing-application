const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');

// @desc    Register new user.
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password, city, country, phone, social, imageUrl} = req.body;
    // Check if all fields are filled.
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields.');
    }

    // Check if the user exist.
    const userExists = await User.findOne({email});
    if(userExists) {
        res.status(400)
        throw new Error('User already exists.');
    }

    // Hash password
    const salt =  await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    
    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        location: {city, country},
        contact: {phone, social},
        imageUrl: imageUrl
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            location: {city: user.city, country: user.country},
            contact: {phone: user.phone, social: user.social},
            imageUrl: user.imageUrl
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data.');
    }
})

// @desc    Authenticate user.
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    // Check for user email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user\'s or password.');
    }
})

// @desc    Get current user's data.
// @route   GET /api/users/me
// @access  Private
const getUserData =asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
})

// @desc    Update current user's data.
// @route   PUT /api/users/me
// @access  Private
const updateUserData = asyncHandler(async (req, res) => {

    const userUpdate = await User.findByIdAndUpdate(
        req.user.id,
        req.body,
        { 
            new: true, 
        });
    res.status(200).send(userUpdate)    
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign(
        { id }, 
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
    )
}

module.exports = {
    registerUser,
    loginUser,
    getUserData,
    updateUserData
}

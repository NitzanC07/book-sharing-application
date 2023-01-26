const express = require('express');
const router = express.Router();
const { 
    registerUser, 
    loginUser, 
    getUserData,
    updateUserData
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getUserData);
router.put('/me', protect, updateUserData);

module.exports = router;

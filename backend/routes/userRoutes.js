const express = require('express');
const router = express.Router();
const { 
    registerUser, 
    loginUser, 
    getUserData,
    updateUserData,
    findOneUser
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getUserData);
router.put('/me', protect, updateUserData);
router.get('/:userId', protect, findOneUser);

module.exports = router;

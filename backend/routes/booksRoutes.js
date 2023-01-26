const express = require('express');
const router = express.Router();
const { 
    getMyBooks,
    getAllBooks,
    createBook, 
    updateBook, 
    deleteBook 
} = require('../controllers/booksController');
const { protect } = require('../middleware/authMiddleware');

router.route('/create-book').post(protect, createBook);
router.route('/all-books').get(protect, getAllBooks);
router.route('/my-books').get(protect, getMyBooks);
router.route('/:id').delete(protect, deleteBook);
router.route('/:id').put(protect, updateBook);

module.exports = router;

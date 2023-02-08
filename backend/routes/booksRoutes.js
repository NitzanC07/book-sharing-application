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

router.route('/all-books').get(getAllBooks);
router.route('/create-book').post(protect, createBook);
router.route('/my-books').get(protect, getMyBooks);
router.route('/my-books/:id').delete(protect, deleteBook);
router.route('/my-books/:id').put(protect, updateBook);

module.exports = router;

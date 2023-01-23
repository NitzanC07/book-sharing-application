const asyncHandler = require('express-async-handler');
const Book = require('../model/bookModel');

// @desc    Get books
// @route   GET /api/books
// @access  Private
const getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find();
    res.status(200).json(books);
})

// @desc    Create a book
// @route   POST /api/books
// @access  Private
const createBook = asyncHandler(async (req, res) => {
    if (!req.body) {
        console.log(`Create new book - body: title - ${req.body.title} | author: ${req.body.author}`);
        res.status(400)
        throw new Error('Please add book\'s details');
    }
    const book = await Book.create({
        title: req.body.title,
        author: req.body.author
    })
    res.status(200).json(book);
})

// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        res.status(400)
        throw new Error('The book is not exist');
    }

    const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { 
            new: true, 
        })

    res.status(200).json(updatedBook);
})

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        res.status(400)
        throw new Error('The book is not exist');
    }

    const removeBook = await Book.findByIdAndDelete(req.params.id)

    res.status(200).json(removeBook);
})

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
}

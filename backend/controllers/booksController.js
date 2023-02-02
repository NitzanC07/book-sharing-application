const asyncHandler = require('express-async-handler');
const Book = require('../model/bookModel');
const User = require('../model/userModel');

// @desc    Get all books of users.
// @route   GET /api/books/all-books
// @access  Private
const getAllBooks = asyncHandler(async (req, res) => {
    const books = await Book.find();
    res.status(200).json(books);
})

// @desc    Get books of logged in user.
// @route   GET /api/books/my-books
// @access  Private
const getMyBooks = asyncHandler(async (req, res) => {
    const books = await Book.find({owner: req.user.id});
    res.status(200).json(books);
})

// @desc    Create a book
// @route   POST /api/books/create-book
// @access  Private
const createBook = asyncHandler(async (req, res) => {
    if (!req.body) {
        console.log(`Create new book - body: ${req.body}`);
        res.status(400)
        throw new Error('Please add book\'s details');
    }
    const book = await Book.create({
        owner: req.user.id,
        title: req.body.title,
        author: req.body.author,
        language: req.body.language,
        year: req.body.year,
        description: req.body.description,
        numberOfPages: req.body.numberOfPages,
        imagUrl: req.body.imageUrl,
        availibilty: req.body.availibilty,
        genre: req.body.genre,
        lendPeriod: req.body.lendPeriod,
    })
    res.status(200).json(book);
})

// @desc    Update a book
// @route   PUT /api/books/my-books/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        res.status(400)
        throw new Error('The book is not exist');
    }

    // Check for the authorized user.
    if (!req.user) {
        res.status(401);
        throw new Error('User not found.');
    }

    if (book.owner.toString() !== req.user.id) {
        res.status(401);
        throw new Error('You are not the book\'s owner.');
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
// @route   DELETE /api/books/my-books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        res.status(400)
        throw new Error('The book is not exist');
    }

    // Check for the authorized user.
    if (!req.user) {
        res.status(401);
        throw new Error('User not found.');
    }

    if (book.owner.toString() !== req.user.id) {
        res.status(401);
        throw new Error('You are not the book\'s owner.');
    }

    const removeBook = await Book.findByIdAndDelete(req.params.id)

    res.status(200).json(removeBook);
})

module.exports = {
    getAllBooks,
    getMyBooks,
    createBook,
    updateBook,
    deleteBook
}

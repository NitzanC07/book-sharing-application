const asyncHandler = require('express-async-handler');

// @desc    Get books
// @route   GET /api/books
// @access  Private
const getBooks = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get Books" });
})

// @desc    Create a book
// @route   POST /api/books
// @access  Private
const createBook = asyncHandler(async (req, res) => {
    console.log(req.body);
    if (!req.body.name) {
        console.log(req.body.name);
        res.status(400)
        throw new Error('Please add book\'s name');
    }
    res.status(200).json({ message: "Create a Book" });
})

// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update a Book ${req.params.id}` });
})

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete a Book ${req.params.id}` });
})

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
}

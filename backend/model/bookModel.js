const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a book\'s name']
        },
        author: {
            type: String,
            required: [true, 'Please add an author\'s name']
        },
        language: {
            type: String,
            required: [true, 'Please enter the language of the book.'],
        },
        year: {
            type: Number,
            required: false,
            default: 1900
        },
        description: {
            type: String,
            required: false,
            default: "Please tell us about the book status."
        }, 
        numberOfPages: {
            type: Number,
            required: false,
            default: 0
        }, 
        image: {
            type: String,
            required: false,
            default: "No Image"
        },
        availibilty: {
            type: Boolean,
            required: false,
            default: true
        }, 
        owner: {
            type: String,
            required: false,
            default: "Book's owner"
        },
        genre: {
            type: String,
            required: false,
            default: "Book's genre"
        },
        durationLoan: {
            type: Number,
            required: false,
            default: 30
        }
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Book', bookSchema);
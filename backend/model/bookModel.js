const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
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
            required: [false, 'Please enter the language of the book.'],
            default: "Book's language"
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
        imageUrl: {
            type: String,
            required: false,
            default: "No Image"
        },
        availibilty: {
            type: Boolean,
            required: false,
            default: true
        }, 
        genre: {
            type: String,
            required: false,
            default: "Book's genre"
        },
        lendPeriod: {
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
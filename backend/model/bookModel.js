const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a book\'s name']
        },
        author: {
            type: String,
            required: [true, 'Please add an author\'s name']
        }
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Book', bookSchema);
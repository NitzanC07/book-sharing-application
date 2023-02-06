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
            required: [true, 'שדה זה הינו חובה. אנא הכנס את שם הספר.']
        },
        author: {
            type: String,
            required: [true, 'שדה זה הינו חובה. אנא הכנס את שם מחבר הספר.']
        },
        availibilty: {
            type: Boolean,
            required: false,
            default: true
        }, 
        language: {
            type: String,
            required: false,
            default: "שפת הספר"
        },
        year: {
            type: Number,
            required: false,
            default: 0
        },
        description: {
            type: String,
            required: false,
            default: "תיאור הספר בקצרה."
        }, 
        numberOfPages: {
            type: Number,
            required: false,
            default: 0
        }, 
        imageUrl: {
            type: String,
            required: false,
            default: "Not Availible"
        },
        genre: {
            type: String,
            required: false,
            default: "סוגה"
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
import axios from 'axios';

const API_URI = 'api/books';

// Create new book
const createBook = async (bookData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.post(
        `${API_URI}/create-book`, 
        bookData,
        config
    )

    return response.data;
}

// Get user books
const getBooks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.get(`${API_URI}/my-books`, config)

    return response.data;
}

const bookService = {
    createBook,
    getBooks
}

export default bookService;
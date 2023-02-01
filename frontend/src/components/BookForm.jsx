import { useState } from 'react';
import { useDispatch } from "react-redux";
import { createBook } from '../features/books/bookSlice';

function BookForm() {

    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookLendPeriod, setBookLendPeriod] = useState(30);

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createBook({
            title: bookTitle,
            author: bookAuthor,
            lendPeriod: bookLendPeriod
        }))
    }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label htmlFor='bookTitle'>Book's name: </label>
                <input 
                    type='text'
                    name='bookTitle'
                    id='bookTitle'
                    value={bookTitle}
                    onChange={(e) => setBookTitle(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='bookAuthor'>Book's Author: </label>
                <input 
                    type='text'
                    name='bookAuthor'
                    id='bookAuthor'
                    value={bookAuthor}
                    onChange={(e) => setBookAuthor(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='bookLendPeriod'>Lend period (days): </label>
                <input 
                    type='number'
                    name='bookLendPeriod'
                    id='bookLendPeriod'
                    value={bookLendPeriod}
                    onChange={(e) => setBookLendPeriod(e.target.value)}
                />
            </div>
            <div className="form-group">
                <button 
                    className="btn btn-block"
                    type='submit'
                >
                    Add book
                </button>
            </div>
        </form>
    </section>
  )
}

export default BookForm
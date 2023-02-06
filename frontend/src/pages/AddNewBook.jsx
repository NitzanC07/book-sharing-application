import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { createBook } from '../features/books/bookSlice';

function AddNewBook() {

    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookLendPeriod, setBookLendPeriod] = useState(30);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createBook({
            title: bookTitle,
            author: bookAuthor,
            lendPeriod: bookLendPeriod
        }))

        navigate('/my-books')
    }

  return (
    <section className="page add-new-book">
        <h2 className='page__title'>הוספת ספר חדש</h2>
        <form onSubmit={onSubmit} className="form">
            <div className='form-group'>
                <label htmlFor='bookTitle'>שם הספר: </label>
                <input 
                    type='text'
                    name='bookTitle'
                    id='bookTitle'
                    value={bookTitle}
                    onChange={(e) => setBookTitle(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='bookAuthor'>מחבר הספר: </label>
                <input 
                    type='text'
                    name='bookAuthor'
                    id='bookAuthor'
                    value={bookAuthor}
                    onChange={(e) => setBookAuthor(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='bookLendPeriod'>תקופת השאלה (בימים): </label>
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
                    className="submit-button"
                    type='submit'
                >
                    הוספת ספר למדף הספרים האישי
                </button>
            </div>
        </form>
    </section>
  )
}

export default AddNewBook
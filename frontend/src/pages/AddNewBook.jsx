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
                <label 
                    htmlFor='bookTitle' 
                    className='form__label'
                >
                    שם הספר: 
                </label>
                <input 
                    className='form__input'
                    type='text'
                    name='bookTitle'
                    id='bookTitle'
                    value={bookTitle}
                    onChange={(e) => setBookTitle(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label 
                    htmlFor='bookAuthor'
                    className='form__label'
                >
                    מחבר הספר: 
                </label>
                <input 
                    className='form__input'
                    type='text'
                    name='bookAuthor'
                    id='bookAuthor'
                    value={bookAuthor}
                    onChange={(e) => setBookAuthor(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label 
                    htmlFor='bookLendPeriod'
                    className='form__label'
                >
                    תקופת השאלה (בימים): 
                </label>
                <input 
                    className='form__input'
                    type='number'
                    name='bookLendPeriod'
                    id='bookLendPeriod'
                    value={bookLendPeriod}
                    onChange={(e) => setBookLendPeriod(e.target.value)}
                />
            </div>
            <div className="form-group">
                <button 
                    className="form__submit-button"
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
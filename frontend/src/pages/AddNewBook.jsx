import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { createBook } from '../features/books/bookSlice';

function AddNewBook() {

    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookLanguage, setBookLanguage] = useState('');
    const [bookYear, setBookYear] = useState(0);
    const [bookDescription, setBookDescription] = useState('');
    const [bookNumberOfPages, setBookNumberOfPages] = useState(0);
    const [bookImageUrl, setBookImageUrl] = useState('');
    const [bookGenre, setBookGenre] = useState('');
    const [bookLendPeriod, setBookLendPeriod] = useState(30);
    const [bookAvailibilty, setBookAvailibilty] = useState(true);

    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createBook({
            title: bookTitle,
            author: bookAuthor,
            availibilty: bookAvailibilty,
            language: bookLanguage,
            year: bookYear,
            description: bookDescription,
            numberOfPages: bookNumberOfPages,
            imageUrl: bookImageUrl,
            genre: bookGenre,
            lendPeriod: bookLendPeriod
        }))

        navigate('/my-books')
    }

  return (
    <section className="page add-new-book">
        <div className='page__content'>
            <h2 className='page__title' tabIndex={7}>הוספת ספר חדש</h2>
            {
                !user ? 
                <p className="page__text" tabIndex={11}>עמוד זה פתוח למשתמשים רשומים בלבד.</p>
                : 
                <form onSubmit={onSubmit} className="form">
                    <div className='form-group'>
                        <label 
                            htmlFor='bookTitle' 
                            className='form__label'
                            tabIndex={8}
                        >
                            שם הספר: 
                        </label>
                        <input 
                            className='form__input'
                            tabIndex={9}
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
                            tabIndex={10}
                        >
                            מחבר הספר: 
                        </label>
                        <input 
                            className='form__input'
                            tabIndex={11}
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
                            htmlFor='bookLanguage'
                            className='form__label'
                            tabIndex={12}
                        >
                            שפה: 
                        </label>
                        <input 
                            className='form__input'
                            tabIndex={13}
                            type='string'
                            name='bookLanguage'
                            id='bookLanguage'
                            value={bookLanguage}
                            onChange={(e) => setBookLanguage(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label 
                            htmlFor='bookYear'
                            className='form__label'
                            tabIndex={14}
                        >
                            שנת הוצאה: 
                        </label>
                        <input 
                            className='form__input'
                            tabIndex={15}
                            type='number'
                            name='bookYear'
                            id='bookYear'
                            value={bookYear}
                            onChange={(e) => setBookYear(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label 
                            htmlFor='bookNumberOfPages'
                            className='form__label'
                            tabIndex={16}
                        >
                            מספר עמודים: 
                        </label>
                        <input 
                            className='form__input'
                            tabIndex={17}
                            type='number'
                            name='bookNumberOfPages'
                            id='bookNumberOfPages'
                            value={bookNumberOfPages}
                            onChange={(e) => setBookNumberOfPages(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label 
                            htmlFor='bookGenre'
                            className='form__label'
                            tabIndex={18}
                        >
                            סוגה: 
                        </label>
                        <input 
                            className='form__input'
                            tabIndex={19}
                            type='string'
                            name='bookGenre'
                            id='bookGenre'
                            value={bookGenre}
                            onChange={(e) => setBookGenre(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label 
                            htmlFor='bookDescription'
                            className='form__label'
                            tabIndex={20}
                        >
                            תיאור הספר: 
                        </label>
                        <textarea 
                            className='form__input'
                            tabIndex={21}
                            type='string'
                            cols={30}
                            rows={4}
                            name='bookDescription'
                            id='bookDescription'
                            placeholder='תאר בקצרה את מצבו הפיזי של הספר. אפשר גם להוסיף כמה מילים על חוויית הקריאה שלך בו.'
                            value={bookDescription}
                            onChange={(e) => setBookDescription(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label 
                            htmlFor='bookImageUrl'
                            className='form__label'
                            tabIndex={22}
                        >
                            תמונת הספר: 
                        </label>
                        <input 
                            className='form__input'
                            tabIndex={23}
                            type='string'
                            name='bookImageUrl'
                            id='bookImageUrl'
                            value={bookImageUrl}
                            onChange={(e) => setBookImageUrl(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label 
                            htmlFor='bookLendPeriod'
                            className='form__label'
                            tabIndex={24}
                        >
                            תקופת השאלה (בימים): 
                        </label>
                        <input 
                            className='form__input'
                            tabIndex={25}
                            type='number'
                            name='bookLendPeriod'
                            id='bookLendPeriod'
                            value={bookLendPeriod}
                            onChange={(e) => setBookLendPeriod(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label 
                            htmlFor='bookAvailibilty'
                            className='form__label'
                            tabIndex={26}
                        >
                            האם הספר זמין למסירה? 
                        </label>
                        <input 
                            className='form__input'
                            tabIndex={27}
                            type='checkbox'
                            defaultChecked
                            name='bookAvailibilty'
                            id='bookAvailibilty'
                            value={bookAvailibilty}
                            onChange={(e) => setBookAvailibilty(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <button 
                            className="form__submit-button"
                            tabIndex={28}
                            type='submit'
                        >
                            הוספת ספר למדף הספרים האישי
                        </button>
                    </div>
                </form>
            }
        </div>
    </section>
  )
}

export default AddNewBook
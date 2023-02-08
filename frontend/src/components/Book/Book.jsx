import './book.css';
import './__delete-btn/book__delete-btn.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../../features/books/bookSlice';

function Book(props) {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className='book' key={props.index} tabIndex={props.index + 9}>
        <h3 className='page__subtitle'>{props.title}</h3>
        <p className='page__text'>מחבר: {props.author}</p>
        <p className='page__text'>שפה: {props.language}</p>
        <p className='page__text'>תיאור: {props.description}</p>
        {
          user ? 
          <p className='page__text'>איש קשר: {props.owner}</p> 
          : 
          ""
        }
        {
          user && user._id === props.owner ?
          <button className="book__delete-btn" onClick={() => dispatch(deleteBook(props.id))}>הסר</button> :
          ""
        }
        
    </div>
  )
}

export default Book

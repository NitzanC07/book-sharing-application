import { useDispatch } from 'react-redux';
import { deleteBook } from '../features/books/bookSlice';

function Book(props) {

    const dispatch = useDispatch();

  return (
    <div key={props.index}>
        <h3>Book {props.index+1}</h3>  
        <p>Title: {props.title}</p>
        <p>Author: {props.author}</p>
        <p>Lend Period (days): {props.lendPeriod}</p>
        <button className="delete-button" onClick={() => dispatch(deleteBook(props.id))}>Delete book</button>
    </div>
  )
}

export default Book
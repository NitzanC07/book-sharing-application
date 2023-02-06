import { useDispatch } from 'react-redux';
import { deleteBook } from '../../features/books/bookSlice';

function Book(props) {

    const dispatch = useDispatch();

  return (
    <div key={props.index}>
        <h3>ספר {props.index+1}</h3>  
        <p>שם הספר: {props.title}</p>
        <p>מחבר: {props.author}</p>
        <p>תקופת השאלה (בימים): {props.lendPeriod}</p>
        <button className="delete-button" onClick={() => dispatch(deleteBook(props.id))}>הסר ספר</button>
    </div>
  )
}

export default Book
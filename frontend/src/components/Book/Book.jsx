import "./book.css";
import "./__delete-btn/book__delete-btn.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../features/books/bookSlice";
import { useState, useEffect } from "react";
import { getOneUserData } from "../../features/auth/authSlice";

function Book(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [ownerName, setOwnerName] = useState("");

  useEffect(() => {
    // Fetch the owner's details and set the owner's name in state
    const fetchOwnerDetails = async () => {
      if (props.owner) {
        const response = await fetch(`/api/users/${props.owner._id}`);
        const data = await response.json();
        console.log(data);
        setOwnerName(data.name);
      }
    };

    fetchOwnerDetails();
  }, [props.owner]);

  return (
    <div className="book" key={props.index}>
      <h3 className="page__subtitle">{props.title}</h3>
      <p className="page__text">מחבר: {props.author}</p>
      <p className="page__text">שפה: {props.language}</p>
      <p className="page__text">תיאור: {props.description}</p>
      {user && <p className="page__text">איש קשר: {ownerName}</p>}
      {user && user._id === props.owner && (
        <button
          className="book__delete-btn"
          onClick={() => dispatch(deleteBook(props.id))}
        >
          הסר
        </button>
      ) }
    </div>
  );
}

export default Book;

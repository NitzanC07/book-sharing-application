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
  const [ownerData, setOwnerData] = useState(false);

  useEffect(() => {
    // Fetch the owner's details and set the owner's name in state
    const fetchOwnerDetails = async () => {
      if (props.owner) {
        try {
          await getOneUserData(props.owner._id)
          setOwnerName(props.owner.name);
        } catch (error) {
          console.error(error);
        }
        
      }
    };

    fetchOwnerDetails();
  }, [props.owner, ownerName]);

  function getOwnerDetails(e) {
    ownerData ? setOwnerData(false) : setOwnerData(true);
  }

  return (
    <div className="book" key={props.index}>
      <h3 className="page__subtitle">{props.title}</h3>
      <p className="page__text">מחבר: {props.author}</p>
      <p className="page__text">שפה: {props.language}</p>
      <p className="page__text">תקציר: {props.description}</p>
      {
        user && user._id !== props.owner._id &&
        <>
          <p className="page__text">
            איש קשר: <button 
              className="btn__book-owner"
              onClick={(e) => getOwnerDetails(e)}
              >
                {ownerName}
              </button>
          </p>
          { user && ownerData && <p className="page__text">טלפון: {props.owner.contact.phone}</p> }
          
        </>
      }
      {
        user && user._id === props.owner._id && (
          <button
            className="book__delete-btn"
            onClick={() => dispatch(deleteBook(props.id))}
          >
            הסר
          </button>
        )
      }
    </div>
  );
}

export default Book;

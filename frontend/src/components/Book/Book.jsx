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

  // console.log("Owner", props.owner , "User", user);

  useEffect(() => {
    // Fetch the owner's details and set the owner's name in state
    const fetchOwnerDetails = async () => {
      console.log(props.owner ? props.owner : "");
      if (props.owner) {
        try {
          await getOneUserData(props.owner._id)
          console.log(props.owner.name);
          setOwnerName(props.owner.name);
        } catch (error) {
          console.error(error);
        }
        
      }
    };

    fetchOwnerDetails();
  }, [props.owner, ownerName]);

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

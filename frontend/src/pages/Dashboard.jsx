import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BookForm from "../components/BookForm";
import Spinner from "../components/Spinner";
import { getBooks, reset } from "../features/books/bookSlice";
import Book from "../components/Book";

function Dashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { books, isLoading, isError, message } = useSelector((state) => state.books)

  useEffect(() => {
    if(!user) {
      navigate('/login')
    } else {
        dispatch(getBooks())
        return () => {
          dispatch(reset())
        } 
    }

    if (isError) {
      console.log(message);
    }
  }, [user, navigate, isError, dispatch, message])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Add another Book</p>
      </section>

      <BookForm />

      <section className="my-books">
        <p>My books</p>
        {
          books.length > 0 ? 
          books.map((book, i) => (
            <Book 
              key={i}
              index={i}
              id={book['_id']}
              title={book['title']}
              author={book['author']}
              lendPeriod={book['lendPeriod']}
            />
          )) : 
          <h3>You have not books on your shelf.</h3>
        }
      </section>
      
    </>
  )
}

export default Dashboard
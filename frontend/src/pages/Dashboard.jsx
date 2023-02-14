import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllBooks, reset } from "../features/books/bookSlice";
import Book from "../components/Book/Book";
import Loading from "../components/Loading/Laoding";

function Dashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { books, isLoading, isError, message } = useSelector((state) => state.books)

  useEffect(() => {
    dispatch(getAllBooks())
    return () => {
      dispatch(reset())
      if (isError) {
        console.log(message);
      }
    }
  }, [user, navigate, isError, dispatch, message])

  if (isLoading) {
      return <Loading />
  }

  return (
    <div className="page dashboard">
      <div className="page__content">
        <h2 className='page__title'>הספריה השיתופית</h2>

        <div className="page__books-container">
          {
            books.length > 0 ? 
            books.map((book, i) => (
              <Book 
                key={i}
                index={i}
                id={book['_id']}
                owner={book['owner']}
                availibilty={book['availibilty']}
                title={book['title']}
                author={book['author']}
                language={book['language']}
                year={book['year']}
                description={book['description']}
                numberofPages={book['numberOfPages']}
                imageUrl={book['imageUrl']}
                genre={book['genre']}
                lendPeriod={book['lendPeriod']}
                createdAt={book['createdAt']}
                updatedAt={book['updatedAt']}
              />
            )) : 
            <p className="page__text">אין לך עדיין ספרים.</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard
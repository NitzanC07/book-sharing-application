import { useSelector } from "react-redux";

function WishlistBooks() {

    const { user } = useSelector((state) => state.auth);

    return (
      <div className="page wishlist-books">
        <div className="page__content">
          <h2 className='page__title' tabIndex={10}>ספרים מבוקשים</h2>
          {
            !user ? 
            <p className="page__text" tabIndex={11}>עמוד זה פתוח למשתמשים רשומים בלבד.</p> : ""
        }
        </div>
      </div>
    )
  }
  
  export default WishlistBooks
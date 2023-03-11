import '../styles/page/__button/page__button.css';
import { useSelector } from "react-redux";

function UserPersonalData(props) {

  const openUpdatePersonalDataPopup = () => {
    props.handleOpenPopups();
  }

  const { user } = useSelector((state) => (state.auth));
  
    return (
      <div className="page user-personal-data">
        <div className="page__content">
          <h2 className='page__title'>פרטים אישיים</h2>
          {
            !user ? 
            <p className="page__text">עמוד זה פתוח למשתמשים רשומים בלבד.</p>
            :
            <div>
              <p className="page__text">שם: {user.name}</p>
              <p className="page__text">דוא"ל: {user.email}</p>
              <p className="page__text">מגורים: {user.location.city}, {user.location.country}</p>
              <p className="page__text">טלפון: {user.contact.phone}</p>
              <p className="page__text">רשת חברתית: {user.contact.social}</p>
              <button 
                className="page__button"
                onClick={openUpdatePersonalDataPopup}
              >
                עדכון פרטים אישיים
              </button>
            </div>
          }
        </div>
      </div>
    )
  }
  
  export default UserPersonalData

import '../styles/page/__button/page__button.css';
import { useSelector } from "react-redux";

function UserPersonalData(props) {

  const openUpdatePersonalDataPopup = () => {
    props.handleOpenPopups();
  }

  const { user } = useSelector((state) => state.auth);
  // console.log('"Personal data page', user);
  
    return (
      <div className="page user-personal-data">
        <div className="page__content">
          <h2 className='page__title' tabIndex={7}>פרטים אישיים</h2>
          {
            !user ? 
            <p className="page__text" tabIndex={11}>עמוד זה פתוח למשתמשים רשומים בלבד.</p>
            :
            <div>
              <p className="page__text" tabIndex={11}>שם: {user.name}</p>
              <p className="page__text" tabIndex={12}>דוא"ל: {user.email}</p>
              <p className="page__text" tabIndex={13}>מגורים: {user.location.city}, {user.location.country}</p>
              <p className="page__text" tabIndex={14}>טלפון: {user.contact.phone}</p>
              <p className="page__text" tabIndex={15}>רשת חברתית: {user.contact.social}</p>
              <button 
                className="page__button"
                tabIndex={16}
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

import '../styles/page/__button/page__button.css';
import { useSelector, useDispatch } from "react-redux";
import { getUserPersonalData } from '../features/auth/authSlice';
import Loading from '../components/Loading/Laoding';
import { useEffect } from 'react';

function UserPersonalData(props) {
  // console.log("Activate PersonalDataPage: ", props);

  const dispatch = useDispatch();

  const { user, isLoading, isError, message } = useSelector((state) => state.auth);
  // console.log("User: ",user);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          await getUserPersonalData()          
        } catch {
          if (isError) {
            console.log(message);
          }
        }
      }
    }
    fetchUserData();
  }, [user, isError, dispatch, message])

  if (isLoading) {
      return <Loading />
  }

  const openUpdatePersonalDataPopup = () => {
    props.handleOpenPopups();
  }
  
    return (
      <div className="page user-personal-data">
        <div className="page__content">
          <h2 className='page__title'>פרטים אישיים</h2>
          {
            !user ? <p className="page__text">עמוד זה פתוח למשתמשים רשומים בלבד.</p>
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

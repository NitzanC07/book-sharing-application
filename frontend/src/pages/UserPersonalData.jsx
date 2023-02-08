// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { getUserPersonalData, reset } from "../features/auth/authSlice";
// import Loading from "../components/Loading/Laoding";

function UserPersonalData() {

  const { user } = useSelector((state) => state.auth);

    return (
      <div className="page user-personal-data">
        <div className="page__content">
          <h2 className='page__title' tabIndex={7}>פרטים אישיים</h2>
          {
            !user ? 
            <p className="page__text" tabIndex={11}>עמוד זה פתוח למשתמשים רשומים בלבד.</p>
            :
            ""
          }
        </div>
      </div>
    )
  }
  
  export default UserPersonalData
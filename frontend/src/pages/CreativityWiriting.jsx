import { useSelector } from "react-redux";

function CreativityWriting() {

    const { user } = useSelector((state) => state.auth);

    return (
      <div className="page creativity-writing">
        <div className="page__content">
          <h2 className='page__title'>כתיבה יצירתית</h2>
          {
            !user ? 
            <p className="page__text">עמוד זה פתוח למשתמשים רשומים בלבד.</p>
            :
            ""
          }
        </div>
      </div>
    )
  }
  
  export default CreativityWriting;
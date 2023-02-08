import './navigation.css';
import './navigation-button.css';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Navigation(props) {

    const navigate = useNavigate();
    // const { user } = useSelector((state) => state.auth);
    // console.log(user)

    return(
        <nav className='navigation'>
            <button 
                className='navigation-button' 
                tabIndex={4}
                onClick={() => (navigate('/'))}
            >
                הספריה השיתופית
            </button>
            <button 
                className='navigation-button' 
                tabIndex={5}
                onClick={() => (navigate('/wishlist-books'))}
            >
                ספרים מבוקשים
            </button>
            <button 
                className='navigation-button' 
                tabIndex={6}
                onClick={() => (navigate('/my-books'))}
            >
                מדף הספרים שלי
            </button>
            <button 
                className='navigation-button' 
                tabIndex={7}
                onClick={() => (navigate('/create-book'))}
            >
                הוספת ספר
            </button>
            <button 
                className='navigation-button' 
                tabIndex={8}
                onClick={() => (navigate('/creativity-writing'))}
            >
                כתיבה יצירתית
            </button>
            <button 
                className='navigation-button' 
                tabIndex={9}
                onClick={() => (navigate('/me'))}
            >
                פרטים אישיים
            </button>
            
        </nav> 
    )
}

export default Navigation;
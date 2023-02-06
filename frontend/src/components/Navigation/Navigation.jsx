import './navigation.css';
import './navigation-button.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Navigation(props) {

    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    return(
        <nav className='navigation'>
            <button 
                className='navigation-button' 
                onClick={() => (user ? navigate('/') : navigate('/'))}
            >
                ראשי
            </button>
            <button 
                className='navigation-button' 
                onClick={() => (user ? navigate('/create-book') : navigate('/login'))}
            >
                הוסף ספר
            </button>
            <button 
                className='navigation-button' 
                onClick={() => (user ? navigate('/my-books') : navigate('/login'))}
            >
                הספרים שלי
            </button>
            
        </nav> 
    )
}

export default Navigation;
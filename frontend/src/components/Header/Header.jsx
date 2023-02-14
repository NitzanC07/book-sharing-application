import './header.css';
import './__heading/header__heading.css';
import './__logo/header__logo.css';
import './__logo/header__logo-text.css';
import './__links/header__links.css';
import './__list-item/header__list-item.css';
import './__link/header__link.css';
import './btn-logout.css';
import './__title/header__title.css';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import Navigation from '../Navigation/Navigation';

function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/')
    }

  return (
    <header className='header'>
        <section className='header__heading'>
            <div className='header__logo'>
                <Link to='/' className='header__logo-text'>הספריה השיתופית</Link>
            </div>
            <ul className='header__links'>
                {
                    user ?
                    (
                        <>
                            <li className='header__list-item'>
                                <button className='header__link btn-logout' onClick={() => navigate('/me')}>
                                    <p className="header__link">{user.name}</p>
                                </button>
                            </li>
                            <li className='header__list-item'>
                                <button className='header__link btn-logout' onClick={onLogout}>
                                    להתנתק <FaSignOutAlt />
                                </button>
                            </li>
                        </>
                    ) :
                    (
                        <>
                            <li className='header__list-item'>
                                <Link to='/login' className='header__link'>
                                    <FaSignInAlt /> להתחבר
                                </Link>
                            </li>
                            <li className='header__list-item'>
                                <Link to='/register' className='header__link'>
                                    <FaUser /> להרשם
                                </Link>
                            </li>
                        </>
                    )
                }
                
            </ul>
        </section>

        <Navigation />

    </header>
  )
}

export default Header;
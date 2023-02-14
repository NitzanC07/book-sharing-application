import { useState } from "react";
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import { useEffect } from "react";
import Loading from "../components/Loading/Laoding";

function Login() {

    const [formData, setFormData] =useState({
        email: '',
        password: ''
    })

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());

    }, [user, isError, isSuccess, message, navigate, dispatch])

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const userData = {email, password};
        dispatch(login(userData));
    }

    if (isLoading) {
        return <Loading />
    }

  return (
    <section className="page">
        <div className="page__content">
        <section>
            <h1 className="page__title"><FaSignInAlt /> כניסת משתמש קיים</h1>
            <p className="page__text">הכנס עם דוא"ל וסיסמא</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label 
                        className="form__label"
                        htmlFor="email"
                    >
                        דוא"ל: 
                    </label>
                    <input 
                        className='form__input'
                        type='email'
                        id='email'
                        name="email"
                        value={email}
                        placeholder='הכנס כתובת דואר אלקטרוני'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form__label"
                        htmlFor="password"
                    >
                        סיסמא: 
                    </label>
                    <input 
                        className='form__input'
                        type='password'
                        id='password'
                        name="password"
                        value={password}
                        placeholder='הכנס סיסמא'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button 
                        type='submit' 
                        className="form__submit-button"
                    >
                        התחבר
                    </button>
                </div>
            </form>
            <p className="page__text">
                משתמש חדש? צור חשבון בחינם <Link to={'/register'}>כאן</Link>.
            </p>
        </section>
        </div>
        
    </section>
  )
}

export default Login;
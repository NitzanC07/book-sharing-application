import { useState } from "react";
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
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
        <section>
            <h1 className="page__title"><FaSignInAlt /> כניסת משתמש קיים</h1>
            <p className="page__text">הכנס עם דוא"ל וסיסמא</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">דוא"ל: </label>
                    <input 
                        type='email'
                        className='form-control'
                        id='email'
                        name="email"
                        value={email}
                        placeholder='Enter your E-mail'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">סיסמא: </label>
                    <input 
                        type='password'
                        className='form-control'
                        id='password'
                        name="password"
                        value={password}
                        placeholder='Enter password'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button type='submit' className="submit-button">
                        התחבר
                    </button>
                </div>
            </form>
        </section>
    </section>
  )
}

export default Login;
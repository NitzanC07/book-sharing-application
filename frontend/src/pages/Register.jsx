import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { register, reset } from '../features/auth/authSlice';
import { useEffect } from "react";
import Loading from "../components/Loading/Laoding";

function Register() {

    const [formData, setFormData] =useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData;

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

        if (password !== password2) {
            toast.error('Password do not match')
        } else {
            const userData = {
                name,
                email, 
                password,
            }

            dispatch(register(userData));
        }
    }

    if (isLoading) {
        return <Loading />
    }

    
  return (
    <section className="page">
        <section>
            <h1 className="page__title"><FaUser /> הרשמה למערכת</h1>
            <p className="page__text">צור חשבון משתמש והתחל לשתף ספרים</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">שם: </label>
                    <input 
                        type='text'
                        className='form-control'
                        id='name'
                        name="name"
                        value={name}
                        placeholder='Enter your name'
                        onChange={onChange}
                    />
                </div>
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
                    <label htmlFor="pssword">סיסמא: </label>
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
                    <label htmlFor="pssword2">אישור סיסמא: </label>
                    <input 
                        type='password'
                        className='form-control'
                        id='password2'
                        name="password2"
                        value={password2}
                        placeholder='Confirm password'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button type='submit' className="submit-button">
                        הרשם
                    </button>
                </div>
            </form>
        </section>
    </section>
  )
}

export default Register
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
        password2: '',
        city: '',
        country: '',
        phone: '',
        social: '',
        imageUrl: '',
    })

    const { name, email, password, password2, city, country, phone, social, imageUrl } = formData;

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
                city, 
                country,
                phone,
                social,
                imageUrl
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
            <h1 className="page__title" tabIndex={8}><FaUser /> הרשמה למערכת</h1>
            <p className="page__text" tabIndex={9}>צור חשבון משתמש והתחל לשתף ספרים</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label 
                        htmlFor="name"
                        className="form__label"
                        tabIndex={10}
                    >
                        שם: 
                    </label>
                    <input
                        className='form__input'
                        tabIndex={11}
                        type='text'
                        id='name'
                        name="name"
                        value={name}
                        placeholder='הכנס את שמך'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form__label"
                        tabIndex={12}
                        htmlFor="email"
                    >
                        דוא"ל: 
                    </label>
                    <input 
                        className='form__input'
                        tabIndex={13}
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
                        tabIndex={14}
                        htmlFor="pssword"
                        >
                            סיסמא: 
                        </label>
                    <input 
                        className='form__input'
                        tabIndex={15}
                        type='password'
                        id='password'
                        name="password"
                        value={password}
                        placeholder='הכנס סיסמא'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form__label" 
                        tabIndex={16}
                        htmlFor="pssword2"
                    >
                        אישור סיסמא: 
                    </label>
                    <input 
                        className='form__input'
                        tabIndex={17}
                        type='password'
                        id='password2'
                        name="password2"
                        value={password2}
                        placeholder='הכנס סיסמא בשנית'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form__label" 
                        tabIndex={18}
                        htmlFor="city"
                    >
                        עיר: 
                    </label>
                    <input 
                        className='form__input'
                        tabIndex={19}
                        type='text'
                        id='city'
                        name="city"
                        value={city}
                        placeholder='עיר מגורים'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form__label" 
                        tabIndex={20}
                        htmlFor="country"
                    >
                        מדינה: 
                    </label>
                    <input 
                        className='form__input'
                        tabIndex={21}
                        type='text'
                        id='country'
                        name="country"
                        value={country}
                        placeholder='מדינת מגורים'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form__label" 
                        tabIndex={22}
                        htmlFor="phone"
                    >
                        טלפון: 
                    </label>
                    <input 
                        className='form__input'
                        tabIndex={23}
                        type='tel'
                        id='phone'
                        name="phone"
                        value={phone}
                        placeholder='XXX-ABCDEFG'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form__label" 
                        tabIndex={24}
                        htmlFor="text"
                    >
                        רשת חברתית: 
                    </label>
                    <input 
                        className='form__input'
                        tabIndex={25}
                        type='string'
                        id='social'
                        name="social"
                        value={social}
                        placeholder='הדבק קישור לפרופיל האישי שלך ברשת חברתית.'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form__label" 
                        tabIndex={26}
                        htmlFor="imageUrl"
                    >
                        תמונת פרופיל: 
                    </label>
                    <input 
                        className='form__input'
                        tabIndex={27}
                        type='text'
                        id='imageUrl'
                        name="imageUrl"
                        value={imageUrl}
                        placeholder='תמונת פרופיל'
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <button 
                        type='submit' 
                        className="form__submit-button"
                        tabIndex={28}
                    >
                        הרשם
                    </button>
                </div>
            </form>
        </section>
    </section>
  )
}

export default Register
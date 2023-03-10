import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
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
        country: '',
        city: '',
        phone: '',
        social: '',
        imageUrl: '',
    })

    const { name, email, password, password2, country, city, phone, social, imageUrl } = formData;
    
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
                location: {
                    city, 
                    country,
                },
                contact: {
                    phone,
                    social,
                },
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
        <div className="page__content">
        <section>
            <h1 className="page__title"><FaUser /> ?????????? ????????????</h1>
            <p className="page__text">?????? ?????????? ?????????? ?????????? ???????? ??????????</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label 
                        htmlFor="name"
                        className="form__label"
                    >
                        ????: 
                    </label>
                    <input
                        className='form__input'
                        type='text'
                        id='name'
                        name="name"
                        value={name}
                        placeholder='???????? ???? ??????'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form__label"
                        htmlFor="email"
                    >
                        ??????"??: 
                    </label>
                    <input 
                        className='form__input'
                        type='email'
                        id='email'
                        name="email"
                        value={email}
                        placeholder='???????? ?????????? ???????? ????????????????'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label
                        className="form__label"
                        htmlFor="pssword"
                        >
                            ??????????: 
                        </label>
                    <input 
                        className='form__input'
                        type='password'
                        id='password'
                        name="password"
                        value={password}
                        placeholder='???????? ??????????'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form__label" 
                        htmlFor="pssword2"
                    >
                        ?????????? ??????????: 
                    </label>
                    <input 
                        className='form__input'
                        type='password'
                        id='password2'
                        name="password2"
                        value={password2}
                        placeholder='???????? ?????????? ??????????'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form__label" 
                        htmlFor="city"
                    >
                        ??????: 
                    </label>
                    <input 
                        className='form__input'
                        type='text'
                        id='city'
                        name="city"
                        value={city}
                        placeholder='?????? ????????????'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form__label" 
                        htmlFor="country"
                    >
                        ??????????: 
                    </label>
                    <input 
                        className='form__input'
                        type='text'
                        id='country'
                        name="country"
                        value={country}
                        placeholder='?????????? ????????????'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form__label" 
                        htmlFor="phone"
                    >
                        ??????????: 
                    </label>
                    <input 
                        className='form__input'
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
                        htmlFor="text"
                    >
                        ?????? ????????????: 
                    </label>
                    <input 
                        className='form__input'
                        type='string'
                        id='social'
                        name="social"
                        value={social}
                        placeholder='???????? ?????????? ?????????????? ?????????? ?????? ???????? ????????????.'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label 
                        className="form__label" 
                        htmlFor="imageUrl"
                    >
                        ?????????? ????????????: 
                    </label>
                    <input 
                        className='form__input'
                        type='text'
                        id='imageUrl'
                        name="imageUrl"
                        value={imageUrl}
                        placeholder='?????????? ????????????'
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <button 
                        type='submit' 
                        className="form__submit-button"
                    >
                        ????????
                    </button>
                </div>
            </form>
            <p className="page__text">
                ???? ???? ?????? ?????????? ????????? ?????????? ???? ???????????? ?????? <Link to={'/login'}>??????</Link>.
            </p>
        </section>
        </div>
    </section>
  )
}

export default Register
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import PopupWithForm from "./PopupWithForm";
import { updateUserPersonalData, reset } from "../../features/auth/authSlice";
import Loading from "../Loading/Laoding";

function PopupUpdatePersonalData(props) {

    const { user } = useSelector((state) => state.auth);   
    // console.log('"Personal data update', user);
    
    const [formData, setFormData] =useState({
        name: user ? user.name : '',
        city: user ? user.location.city : '',
        country: user ? user.location.country : '',
        phone: user ? user.contact.phone : '',
        social: user ? user.contact.social : '',
        imageUrl: user ? user.imageUrl : '',
    })

    const { name, city, country, phone, social, imageUrl } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        // dispatch(reset());

    }, [isError, isSuccess, message, navigate, dispatch])

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('Update personal data', formData);
        dispatch(updateUserPersonalData({id: user._id, formData}));
    }

    if (isLoading) {
        return <Loading />
    }

    return(
        <>
            {
                user ?

                <PopupWithForm 
                    isOpen={props.isOpen ? 'popup_open' : ''}
                    onClose={props.onClose}
                    onSubmit={handleSubmit}
                    handleDifferentPopup={props.handleDifferentPopup}
                    // isInputsValid={isInputsValid}
                    title="עדכון פרטים אישיים"
                    buttonText="עדכן"
                    text="עדכן"
                >
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

                </PopupWithForm>
                :
                ""

            }
        </>
        
    )
}

export default PopupUpdatePersonalData;
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import PopupWithForm from "./PopupWithForm";
import { updateUserPersonalData } from "../../features/auth/authSlice";

function PopupUpdatePersonalData(props) {

    const { user } = useSelector((state) => state.auth);   
    // console.log('"Personal data update', user);
    
    const [formData, setFormData] =useState({
        name: user ? user.name : '',
        city: user ? user.location.city : '',
        country: user ? user.location.country : '',
        // location: user ? {
        // } : "",
        phone: user ? user.contact.phone : '',
        social: user ? user.contact.social : '',
        // contact: user ? {
        // } : "",
        imageUrl: user ? user.imageUrl : '',
    })

    const { name, city, country, phone, social, imageUrl } = formData;
    // const { city, country } = location;
    // const { phone, social } = contact;

    // const navigate = useNavigate();
    const dispatch = useDispatch();

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log('Update personal data', formData);
        dispatch(updateUserPersonalData({
            name: name,
            location: {
                city: city, 
                country: country,
            },
            contact: {
                phone: phone, 
                social: social,
            },
            imageUrl: imageUrl
        }));
        props.onClose()
        // navigate('/me');
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
                    >
                        שם: 
                    </label>
                    <input
                        className='form__input'
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
                            htmlFor="city"
                        >
                            עיר: 
                        </label>
                        <input 
                            className='form__input'
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
                            htmlFor="country"
                        >
                            מדינה: 
                        </label>
                        <input 
                            className='form__input'
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
                            htmlFor="phone"
                        >
                            טלפון: 
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
                            רשת חברתית: 
                        </label>
                        <input 
                            className='form__input'
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
                            htmlFor="imageUrl"
                        >
                            תמונת פרופיל: 
                        </label>
                        <input 
                            className='form__input'
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
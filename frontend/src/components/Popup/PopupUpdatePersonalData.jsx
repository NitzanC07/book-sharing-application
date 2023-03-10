import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import PopupWithForm from "./PopupWithForm";
import { updateUserPersonalData } from "../../features/auth/authSlice";

function PopupUpdatePersonalData(props) {

    const { user } = useSelector((state) => state.auth);   
    console.log('"Personal data update', user);
    
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
            name,
            location: {
                city, 
                country,
            },
            contact: {
                phone, 
                social,
            },
            imageUrl
        })).then(response => {
            console.log("Response", response);
            user.name = response.name
        });
        props.onClose()
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
                    title="?????????? ?????????? ????????????"
                    buttonText="????????"
                    text="????????"
                >
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

                </PopupWithForm>
                :
                ""

            }
        </>
        
    )
}

export default PopupUpdatePersonalData;
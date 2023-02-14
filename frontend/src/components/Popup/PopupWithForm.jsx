import Popup from '../Popup/Popup';

function PopupWithForm({name, isOpen, onClose, ...props}) {

    // console.log(props);

    return(
        <Popup isOpen={isOpen} name={name} onClose={onClose}>
            <form 
                className="popup__form"
                onSubmit={props.onSubmit}>
                <h2 className="popup__title" tabIndex={1}>{props.title}</h2>
                {props.children}
                
                <div className="form-group">
                    <button 
                        type='submit' 
                        className="form__submit-button"
                        tabIndex={28}
                    >
                        {props.text}
                    </button>
                </div>
                
            </form>
        </Popup>
        
    )
}

export default PopupWithForm;
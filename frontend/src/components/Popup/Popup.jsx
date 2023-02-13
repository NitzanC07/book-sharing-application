import './popup.css';
import './_open/popup_open.css';
import './__container/popup__container.css';
import './__close-button/popup__close-button.css';
import './__field/popup__field.css';
import './__form/popup__form.css';
import './__info/popup__info.css';
import './__input/popup__input.css';
import './__link/popup__link.css';
import './__link-info/popup__link-info.css';
import './__submit-button/popup__submit-button.css';
import './__submit-button/_disabled/popup__submit-button_disabled.css';
import './__text/popup__text.css';
import './__title/popup__title.css';

import { useEffect } from "react";
import closeButton from '../../images/icons/close-icon-black.svg';

const Popup = ({ isOpen, name, onClose, children }) => {

    useEffect(() => {
        if (!isOpen) return;

        const closeByEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', closeByEscape)
        return () => document.removeEventListener('keydown', closeByEscape)
    }, [isOpen, onClose]);

    useEffect(() => {
        if (!isOpen) return;
        
        const handleOverlay = (evt) => {
            if (evt.target.classList.contains('popup_open')) {
                onClose();
            }
        }

        document.addEventListener('mouseup', handleOverlay)
        return () => document.removeEventListener('mouseup', handleOverlay)
    }, [isOpen, onClose]);
  
    return (
        <div className={`popup ${isOpen}`} >
            <div className="popup__container">
                <button 
                    className="popup__close-button"
                    onClick={onClose}
                >
                    <img src={closeButton} alt="Close button" />
                </button>
                
                { children }

            </div>
        </div>
    );
};

export default Popup;


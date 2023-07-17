import './popup-index.css';

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


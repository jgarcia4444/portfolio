import React from 'react';
import '../../styles/ImageModal.css';
import { HiX, } from 'react-icons/hi';

const ImageModal = ({imgUrl, closeModal}) => {

    return (
        <div className="modal-container">
            <div className="modal-options-row">
                <div onClick={closeModal} className="close-button">
                    <HiX color='white' size={32} />
                </div>
            </div>
            <div className="modal-img-container">
                <img className="modal-img" src={imgUrl} />
            </div>
        </div>
    )
}

export default ImageModal;
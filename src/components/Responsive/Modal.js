import React from 'react';
import ReactDOM from 'react-dom';


const Modal = ({ imageUrl, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={imageUrl} alt="Expanded view" className="modal-image" />
        <button className="close-modal" onClick={onClose}>X</button>
      </div>
    </div>,
    document.body 
  );
};

export default Modal;

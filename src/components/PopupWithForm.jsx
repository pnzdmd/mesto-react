import React from 'react';

const PopupWithForm = ({
  popupType,
  isOpen,
  title,
  popupNameForm,
  name,
  children,
  submitButtonText,
  onClose,
}) => {
  return (
    <div
      className={`popup popup_${popupType} ${isOpen ? 'popup_opened' : null}`}
    >
      <div className='popup__container'>
        <h2 className='popup__title'>{title}</h2>
        <form
          className={`popup__form popup__form_${popupNameForm}`}
          name={name}
          noValidate
        >
          {children}
          <button
            className='popup__btn-save'
            type='submit'
            data-value={submitButtonText}
          >
            {submitButtonText}
          </button>
        </form>
        <button
          className='popup__btn-close'
          type='button'
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default PopupWithForm;

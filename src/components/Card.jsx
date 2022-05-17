import React from 'react';
import remove_img from '../images/remove_img.png';

const Card = ({ card, onCardClick, onAreYouSure }) => {
  const { link, name } = card;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <figure className='element'>
      <img
        src={link}
        alt={name}
        className='element__img'
        onClick={handleClick}
      />
      <img
        src={remove_img}
        alt='Удаление изображения'
        className='element__img_remove'
        onClick={onAreYouSure}
      />
      <figcaption className='element__group'>
        <h2 className='element__title'>{name}</h2>
        <div className='element__like'>
          <button className='element__like-btn' type='button'></button>
          <p className='element__like-count'>0</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default Card;

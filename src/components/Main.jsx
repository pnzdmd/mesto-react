import React, { useEffect, useState } from 'react';
import { api } from '../utils/Api';
import Card from './Card';

const Main = ({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onAreYouSure,
}) => {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const { avatar, name, about } = currentUser;

  useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then((res) => {
        setCurrentUser(res[0]);
        setCards(res[1]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-container'>
          <img src={avatar} alt={name} className='profile__avatar' />
          <button
            className='profile__avatar-edit'
            type='button'
            title='Обновить аватар'
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__name'>{name}</h1>
          <button
            className='profile__btn-edit'
            type='button'
            onClick={onEditProfile}
          ></button>
          <p className='profile__about'>{about}</p>
        </div>
        <button
          className='profile__btn-add'
          type='button'
          onClick={onAddPlace}
        ></button>
      </section>

      <section className='elements'>
        <ul className='elements__list'>
          {cards.map((item) => (
            <Card
              key={item._id}
              card={item}
              onCardClick={onCardClick}
              onAreYouSure={onAreYouSure}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;

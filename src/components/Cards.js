import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/Prism.svg'
import img2 from '../images/Prism-blue.svg';

function Cards() {
  return (
    <div className='cards'  id='projects'>
      <h1>Check out some of my projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              path='/projects'
            />
            <CardItem
              src={img2}
              text='Travel through the Islands of Bali in a Private Cruise'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <div className="cards__skills">
              <Badge variant="info">Info</Badge>{' '}
              <Badge variant="info">Info</Badge>{' '}
              <Badge variant="info">Info</Badge>{' '}
            </div>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;

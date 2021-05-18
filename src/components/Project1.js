import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

function Project1(props) {
  return (
    <>
      <li className='projects__item'>
        <Link className='projects__item__link' to={props.path}>
          <figure className='projects__item__pic-wrap' data-category={props.label}>
            <img
              className='projects__item__img'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='projects__item__info'>
            <div className="projects__skills">
              <Badge className='devicon-rails-plain colored' title='Rails'>Rails</Badge>{' '}
              <Badge className='devicon-ruby-plain-wordmark colored' title='Ruby'>Ruby</Badge>{' '}
              <Badge className='devicon-javascript-plain colored' title='JavaScript'>JavaScript</Badge>{' '}
              <Badge className='devicon-postgresql-plain-wordmark colored' title='Postgresql'>Postgresql</Badge>{' '}
            </div>
            <h5 className='projects__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Project1;

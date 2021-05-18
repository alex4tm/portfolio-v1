import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

function Project2(props) {
  return (
    <>
      <li className='projects__item'>
        <Link className='projects__item__link' to={props.path}>
          <figure className='projects__item__pic-wrap' data-category={props.label}>
            <img
              className='projects__item__img'
              alt='BabyWear'
              src={props.src}
            />
          </figure>
          <div className='projects__item__info'>
            <div className="projects__skills">
              <Badge className='devicon-rails-plain colored'>Rails</Badge>{' '}
              <Badge className='devicon-react-plain colored'>React</Badge>{' '}
              <Badge className='devicon-redux-plain colored'>Redux</Badge>{' '}
              <Badge className='devicon-redis-plain colored'>Redis</Badge>{' '}
              <Badge className='devicon-javascript-plain colored'>JavaScript</Badge>{' '}
            </div>
            <h5 className='projects__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Project2;

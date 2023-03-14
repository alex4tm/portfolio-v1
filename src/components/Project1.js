import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/youknowme-user.gif';
import img2 from '../images/youknowme-restaurant.gif';
import img3 from '../images/youknowme-whatsap.jpg';

import './Carousel.css';
import './Modal.css';

function Project1(props) {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Modal size='xl' show={lgShow} onHide={() => setLgShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title as='h2'>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='carousel-container'>
            <Carousel
              className='carousel-wrapper'
              interval={20000}
              pause='hover'
            >
              <Carousel.Item>
                <img src={img1} alt={img1} id='mobile-gif' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={img2} alt={img2} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={img3} alt={img3} />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className='modal-body-info'>
            <div className='projects__skills'>
              <Badge className='devicon-rails-plain colored' title='Rails'>
                Rails
              </Badge>{' '}
              <Badge
                className='devicon-ruby-plain-wordmark colored'
                title='Ruby'
              >
                Ruby
              </Badge>{' '}
              <Badge
                className='devicon-javascript-plain colored'
                title='JavaScript'
              >
                JavaScript
              </Badge>{' '}
              <Badge
                className='devicon-postgresql-plain-wordmark colored'
                title='Postgresql'
              >
                Postgresql
              </Badge>{' '}
            </div>
            <h4>Description:</h4>
            <p>
              This project was made in the week 8 and 9 of the Le Wagon - Dubai
              Bootcamp , batch #562. The project was pitched by me and was
              chosen as #1 by my fellow colleagues as preference to work on. The
              initial ideea was to sum up all of the preferences of a certain
              person (Hotels, Travel, Restaurants, etc) but for the purpose of
              focusing on a certain part at start we chose to go with the
              Restaurant and food preferences.
            </p>
            <h4>Other tools and technologies used in the project:</h4>
            <p>
              Authenticaion implemented using devise gem and uthorization with
              pundit gem
            </p>
            <p>Booking confirmation done using Twillio - whatsap</p>
            <p>Restaurant location implemented with Waze API</p>
            <p>Image hosting - Cloudinary</p>
            <p>Bootstrap and Sass for styling</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='footer-links'>
            <a
              target='blank'
              href='https://youknowme.app/'
              className='btn btn-custom disabled-link'
            >
              Live
              <i className='fas fa-satellite-dish'></i>
            </a>
          </div>
          <div className='footer-links'>
            <a
              target='blank'
              href='https://github.com/alex4tm/YouKnowMe'
              className='btn btn-custom'
            >
              Code
              <i className='fab fa-github'></i>
            </a>
          </div>
        </Modal.Footer>
      </Modal>

      <li className='projects__item'>
        <h2>{props.title}</h2>
        <Link
          className='projects__item__link'
          to={props.path}
          onClick={() => setLgShow(true)}
        >
          <figure
            className='projects__item__pic-wrap'
            data-category={props.label}
          >
            <img className='projects__item__img' alt='' src={props.src} />
          </figure>
          <div className='projects__item__info'>
            <div className='projects__skills'>
              <Badge className='devicon-rails-plain colored' title='Rails'>
                Rails
              </Badge>{' '}
              <Badge
                className='devicon-ruby-plain-wordmark colored'
                title='Ruby'
              >
                Ruby
              </Badge>{' '}
              <Badge
                className='devicon-javascript-plain colored'
                title='JavaScript'
              >
                JavaScript
              </Badge>{' '}
              <Badge
                className='devicon-postgresql-plain-wordmark colored'
                title='Postgresql'
              >
                Postgresql
              </Badge>{' '}
            </div>
            <h5 className='projects__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Project1;

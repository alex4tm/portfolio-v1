import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import landing from '../images/placely_landing.png';
import recommend from '../images/placely_recommend.png';
import visitor from '../images/placely_visitor.png';

function Project2(props) {
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
              interval={15000}
              pause='hover'
            >
              <Carousel.Item>
                <img src={recommend} alt={recommend} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={landing} alt={landing} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={visitor} alt={visitor} />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className='modal-body-info'>
            <div className='projects__skills'>
              <Badge className='devicon-rails-plain colored' title='Rails 7'>
                Rails 7
              </Badge>{' '}
              <Badge className='devicon-redux-plain colored' title='Stimulus'>
                Stimulus
              </Badge>{' '}
              <Badge className='devicon-redux-plain colored' title='Tailwind'>
                Tailwind
              </Badge>{' '}
              <Badge className='devicon-redis-plain colored' title='Postgresql'>
                Postgresql
              </Badge>{' '}
              <Badge className='devicon-react-plain colored' title='Redis'>
                Redis
              </Badge>{' '}
              <Badge
                className='devicon-javascript-plain colored'
                title='JavaScript'
              >
                JavaScript
              </Badge>{' '}
            </div>
            <h4>Description:</h4>
            <p>
              Placely is a web application that helps short-term-rental hosts to
              create digital guides and share them with their guests.
            </p>
            <p>
              It has google maps integration with the places and address API's,
              sidekiq for creating QR's and mailing system, Stimulus for
              interactivity.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='footer-links'>
            <a
              target='blank'
              href='https://placely.info'
              className='btn btn-custom'
            >
              Live
              <i className='fas fa-satellite-dish'></i>
            </a>
          </div>
          <div className='footer-links'>
            <a
              target='blank'
              href='https://github.com/alex4tm/placely'
              className='btn btn-custom disabled-link'
            >
              Private Repository
              <i className='fab fa-github'></i>
            </a>
          </div>
        </Modal.Footer>
      </Modal>

      <li className='projects__item'>
        <h2> {props.title} </h2>
        <Link
          className='projects__item__link'
          to={props.path}
          onClick={() => setLgShow(true)}
        >
          <figure
            className='projects__item__pic-wrap'
            data-category={props.label}
          >
            <img
              className='projects__item__img projects_img_offset'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='projects__item__info'>
            <div className='projects__skills'>
              <Badge className='devicon-rails-plain colored' title='Rails 7'>
                Rails 7
              </Badge>{' '}
              <Badge className='devicon-redux-plain colored' title='Stimulus'>
                Stimulus
              </Badge>{' '}
              <Badge className='devicon-redux-plain colored' title='Tailwind'>
                Tailwind
              </Badge>{' '}
              <Badge className='devicon-redis-plain colored' title='Postgresql'>
                Postgresql
              </Badge>{' '}
              <Badge className='devicon-react-plain colored' title='Redis'>
                Redis
              </Badge>{' '}
              <Badge
                className='devicon-javascript-plain colored'
                title='JavaScript'
              >
                JavaScript
              </Badge>{' '}
            </div>
            <h5 className='projects__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Project2;

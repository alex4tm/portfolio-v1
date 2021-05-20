import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/alex.jpg';
import img2 from '../images/alex-sketcher.jpeg';
import img3 from '../images/doodles2.svg';

import './Carousel.css';
import './Modal.css';


function Project1(props) {

  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title as="h2">
            YouKnowMe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Carousel className="carousel-wrapper" interval={5000} pause="hover">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt={img1}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt={img2}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt={img3}
            />
          </Carousel.Item>
        </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <a href="/">View Live</a>
          <a href="/">View Code</a>
        </Modal.Footer>
      </Modal>

      <li className='projects__item'>
        <Link className='projects__item__link' to={props.path} onClick={() => setLgShow(true)}>
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

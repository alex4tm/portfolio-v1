import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/api-client-main.jpg';
import img2 from '../images/api-client-methods.jpg';
import img3 from '../images/api-client-landing.jpg';

function Project4(props) {

  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title as="h2">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="carousel-container">
            <Carousel className="carousel-wrapper" interval={3000} pause="hover">
              <Carousel.Item>
                <img src={img1}alt={img1} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={img2}alt={img2} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={img3} alt={img3} />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="modal-body-info">
            <div className="projects__skills">
              <Badge className='devicon-nodejs-plain colored' title='NoneJS'>Node.js</Badge>{' '}
              <Badge className='devicon-javascript-plain colored' title='JavaScript'>JavaScript</Badge>{' '}
              <Badge className='devicon-bootstrap-plain colored' title='Bootstrap'>Bootstrap</Badge>{' '}
            </div>
            <h4>Description:</h4>
              <p>Api-Client project built as an easy and lightweight tool for basic REST API methods.</p>
            <h4>Tools and technologies used in the project:</h4>
                <p> Node.js </p>
                <p> codemirror </p>
                <p> axios </p>
                <p> bootstrap </p>
                <p> deployed on heroku </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
            <div className="footer-links">
              <a
                target="blank"
                href="https://api--client.herokuapp.com/"
                className="btn btn-custom">
                Live
                <i className="fas fa-satellite-dish"></i>
              </a>
            </div>
            <div className="footer-links">
              <a
                target="blank"
                href="https://github.com/alex4tm/api_client"
                className="btn btn-custom">
                Code
                <i className="fab fa-github"></i>
              </a>
            </div>
        </Modal.Footer>
      </Modal>

      <li className='projects__item'>
        <h2>{props.title}</h2>
        <Link className='projects__item__link' to={props.path} onClick={() => setLgShow(true)}>
          <figure className='projects__item__pic-wrap' data-category={props.label}>
            <img
              className='projects__item__img projects_img_offset'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='projects__item__info'>
            <div className="projects__skills">
              <Badge className='devicon-nodejs-plain colored' title='NoneJS'>Node.js</Badge>{' '}
              <Badge className='devicon-javascript-plain colored' title='JavaScript'>JavaScript</Badge>{' '}
              <Badge className='devicon-bootstrap-plain colored' title='Bootstrap'>Bootstrap</Badge>{' '}
            </div>
            <h5 className='projects__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Project4;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/mobile.gif';
import img2 from '../images/demo1.mp4';
import img3 from '../images/youknowmelanding.jpg';

import './Carousel.css';
import './Modal.css';


function Project1(props) {

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
            YouKnowMe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="carousel-container">
            <Carousel className="carousel-wrapper" interval={5000000} pause="hover">
              <Carousel.Item>
                <img src={img1}alt={img1} />
              </Carousel.Item>
              <Carousel.Item>
                <video src={img2} type="video/mp4" width="320" height="240" autoPlay muted loop playbackrate="0.5" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={img3} alt={img3} />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="modal-body-info">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque, perferendis beatae minima exercitationem distinctio, voluptatem, dolor repudiandae ipsam hic eligendi minus quos perspiciatis! Omnis eligendi accusantium nisi voluptatibus, soluta.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque, perferendis beatae minima exercitationem distinctio, voluptatem, dolor repudiandae ipsam hic eligendi minus quos perspiciatis! Omnis eligendi accusantium nisi voluptatibus, soluta.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque, perferendis beatae minima exercitationem distinctio, voluptatem, dolor repudiandae ipsam hic eligendi minus quos perspiciatis! Omnis eligendi accusantium nisi voluptatibus, soluta.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque, perferendis beatae minima exercitationem distinctio, voluptatem, dolor repudiandae ipsam hic eligendi minus quos persLorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque, perferendis beatae minima exercitationem distinctio, voluptatem, dolor repudiandae ipsam hic eligendi minus quos perspiciatis! Omnis eligendi accusantium nisi voluptatibus, soluta.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque, perferendis beatae minima exercitationem distinctio, voluptatem, dolor repudiandae ipsam hic eligendi minus quos perspiciatis! Omnis eligendi accusantium nisi voluptatibus, soluta.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque, perferendis beatae minima exercitationem distinctio, voluptatem, dolor repudiandae ipsam hic eligendi minus quos perspiciatis! Omnis eligendi accusantium nisi voluptatibus, soluta.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque, perferendis beatae minima exercitationem distinctio, voluptatem, dolor repudiandae ipsam hic eligendi minus quos perspiciatis! Omnis eligendi accusantium nisi voluptatibus, soluta.piciatis! Omnis eligendi accusantium nisi voluptatibus, soluta.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde neque, perferendis beatae minima exercitationem distinctio, voluptatem, dolor repudiandae ipsam hic eligendi minus quos perspiciatis! Omnis eligendi accusantium nisi voluptatibus, soluta.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
            <div className="footer-links">
              <a target="blank" href="https://youknowme.app/">Live</a>
              <i className="fas fa-satellite-dish"></i>
            </div>
            <div className="footer-links">
              <a target="blank" href="https://github.com/alex4tm/YouKnowMe">Code</a>
              <i className="fab fa-github"></i>
            </div>
        </Modal.Footer>
      </Modal>

      <li className='projects__item'>
        <h2>YouKnowMe</h2>
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

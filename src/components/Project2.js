import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import main from '../images/not-slack-chat.jpg';
import gif from '../images/not-slack-chat.gif';
import signup from '../images/not-slack-chat-signup.jpg';

function Project2(props) {

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
            <Carousel className="carousel-wrapper" interval={15000} pause="hover">
              <Carousel.Item>
                <img src={gif}alt={gif} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={main}alt={main} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={signup} alt={signup} />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="modal-body-info">
              <div className="projects__skills">
                <Badge className='devicon-rails-plain colored' title='Rails'>Rails</Badge>{' '}
                <Badge className='devicon-react-plain colored' title='React'>React</Badge>{' '}
                <Badge className='devicon-redux-plain colored' title='Redux'>Redux</Badge>{' '}
                <Badge className='devicon-redis-plain colored' title='Redis'>Redis</Badge>{' '}
                <Badge className='devicon-javascript-plain colored' title='JavaScript'>JavaScript</Badge>{' '}
            </div>
            <h4>Description:</h4>
            <p>This is a slack-like-chat that is buit on Rails, React, authentication using devise gem, PostgreSQL, Redis and action cable for real-time messages.</p>
            <p>The app was built with the sole purpose of learning more about implementing Rails, React, Redis and deploy it to production as a smooth chat app.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
            <div className="footer-links">
              <a
                target="blank"
                href="https://rails--chat-redux.herokuapp.com/"
                className="btn btn-custom">
                Live
                <i className="fas fa-satellite-dish"></i>
              </a>
            </div>
            <div className="footer-links">
              <a
                target="blank"
                href="https://github.com/alex4tm/rails-react-chat"
                className="btn btn-custom">
                Code
                <i className="fab fa-github"></i>
              </a>
            </div>
        </Modal.Footer>
      </Modal>

      <li className='projects__item'>
        <h2> { props.title } </h2>
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
              <Badge className='devicon-react-plain colored' title='React'>React</Badge>{' '}
              <Badge className='devicon-redux-plain colored' title='Redux'>Redux</Badge>{' '}
              <Badge className='devicon-redis-plain colored' title='Redis'>Redis</Badge>{' '}
              <Badge className='devicon-javascript-plain colored' title='JavaScript'>JavaScript</Badge>{' '}
            </div>
            <h5 className='projects__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Project2;

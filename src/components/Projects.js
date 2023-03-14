import React from 'react';
import './Projects.css';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import img1 from '../images/youknowme-landing.jpg';
import img2 from '../images/placely_landing.png';
import img3 from '../images/tesla-landing.jpg';
import img4 from '../images/api-client-landing.jpg';

function Projects() {
  return (
    <div className='projects' id='projects'>
      <h1>
        .projects(
        <span className='theme--color'>
          <i className='fas fa-tools'></i>
        </span>
        )
      </h1>
      <div className='projects__container'>
        <div className='projects__wrapper'>
          <ul className='projects__items'>
            <Project2
              title='Placely'
              src={img2}
              text='Digital guidebooks made easy.'
              path='/'
            />
            <Project1
              title='YouKnowMe'
              src={img1}
              text='An app that allows you to save all your preferences and share them with restaurants.'
              path='/'
            />
            <Project4
              title='Api-Client'
              src={img4}
              text='Easy to use, lightweight and postman alternative api-client.'
              path='/'
            />
            <Project3
              title='noTesla'
              src={img3}
              text='Tesla landing page clone'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;

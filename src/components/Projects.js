import React from 'react';
import './Projects.css';
import Project1 from './Project1';
import Project2 from './Project2';
import img1 from '../images/youknowmelanding.jpg'
import img2 from '../images/Prism-blue.svg';

function Projects() {
  return (
    <div className='projects'  id='projects'>
      <h1>Check out some of my projects</h1>
      <div className='projects__container'>
        <div className='projects__wrapper'>
          <ul className='projects__items'>
            <Project1
              src={img1}
              text='An app that allows you to save all your preferences and dietary requirements and makes it easy to share them with restaurants.'
              path='/'
            />
            <Project2
              src={img2}
              text='Messaging WebApp with authentication.'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;

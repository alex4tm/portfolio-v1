import React from 'react';
import './Projects.css';
import Project1 from './Project1';
import Project2 from './Project2';
import img1 from '../images/Prism.svg'
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
              text='YouKnowMe'
              path='/'
            />
            <Project2
              src={img2}
              text='BabyWear'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;

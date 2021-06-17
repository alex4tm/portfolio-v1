import React from 'react';
import './Projects.css';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import img1 from '../images/youknowme-landing.jpg'
import img2 from '../images/not-slack-chat.jpg';
import img3 from '../images/tesla-landing.jpg';

function Projects() {
  return (
    <div className='projects'  id='projects'>
      <h1>.projects(<span className="theme--color"><i className="fas fa-tools"></i></span>)</h1>
      <div className='projects__container'>
        <div className='projects__wrapper'>
          <ul className='projects__items'>
            <Project1
              title="YouKnowMe"
              src={img1}
              text='An app that allows you to save all your preferences and share them with restaurants.'
              path='/'
            />
            <Project3
              title="noTesla"
              src={img3}
              text='Tesla landing page clone'
              path='/'
            />
            <Project2
              title="Not Slack Chat"
              src={img2}
              text='Instant chat app built on Rails using Action Cable and Websockets.'
              path='/'
            />

{/*            <Project3
              title="Test"
              src={img2}
              text='TBA'
              path='/'
            />*/}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;

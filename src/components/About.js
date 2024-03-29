import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about-container' id='about'>
      <h1>
        .about(<span className='theme--color'>me</span>)
      </h1>
      <div className='about-content'>
        <div className='about-info'>
          <h3>
            I enjoy front-end development making projects look beautiful, but
            also get a kick out of back-end development and what happens under
            the hood.
          </h3>
          <h3>
            Launched{' '}
            <a
              className=''
              href='https://placely.info'
              traget='_blank'
              style={{
                color: 'green',
                textDecoration: 'none',
                letter_spacing: '3px',
              }}
            >
              Placely.info
            </a>
            {' 🚀 '}
            in February 2023, a digital guidebook for short term rental hosts.
            Enjoying improving it and adding new features.
          </h3>

          <p>
            {' '}
            I’m naturally curious and enjoy figuring out how things work.
            Furthermore, I love building web applications and coming up with new
            ways of saving time in our daily tasks.
          </p>
          <p>
            Lived and worked in the UAE for the last 10 years in aviation. Was
            lucky enough to visit more than 70 countries.
          </p>
          <p>
            In my spare time i love reading and playing chess, 3 and 10 minutes
            time control and puzzles.
          </p>
        </div>
      </div>
      <div className='about-skills'>
        <h1>
          [<span className='theme--color'>...skills,...tools</span>]
        </h1>
        <div className='skills-icons'>
          <i className='devicon-rails-plain colored' title='Rails'></i>
          <i className='devicon-ruby-plain-wordmark colored' title='Ruby'></i>
          <i className='devicon-react-plain-wordmark colored' title='React'></i>
          <i className='devicon-redux-original colored' title='Redux'></i>
          <i
            className='devicon-javascript-plain colored'
            title='JavaScript'
          ></i>
          <i className='devicon-nodejs-plain colored' title='Node.js'></i>
          <i className='devicon-html5-plain-wordmark colored' title='HTML5'></i>
          <i className='devicon-css3-plain-wordmark colored' title='css3'></i>
          <i className='devicon-sass-original colored' title='Sass'></i>
          <i className='devicon-mysql-plain colored' title='MYSQL'></i>
          <i
            className='devicon-postgresql-plain-wordmark colored'
            title='Postgresql'
          ></i>
          <i
            className='devicon-bootstrap-plain-wordmark colored'
            title='Bootstrap'
          ></i>
          <i
            className='devicon-heroku-plain-wordmark colored'
            title='Heroku'
          ></i>
          <i className='devicon-git-plain colored' title='Git'></i>
          <i className='devicon-trello-plain colored' title='Trello'></i>
          <i className='devicon-figma-plain colored' title='Figma'></i>
        </div>
      </div>
    </div>
  );
}

export default About;

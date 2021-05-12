import React from 'react';
import './About.css'

function About() {
  return (
    <div className="about-container" id='about'>
      <h1>A bit about me</h1>
      <div className="about-content">
        <div className="photo"></div>
        <div className="about-info">
          <p></p>
          <ul> Some random facts about me:
            <li>Lived and worked in the UAE for the last 10 years. Was lucky enough to get payed and visit the world (more than 70 countries)</li>
            <li>When i was 12 years old i built a command prompt exec (that was copying in the background some windows folders until the HDD was full) and shared with with 6 of my neighbours on our building network as a prank. I helped them all fix it and had a good laught about it :)</li>
            <li>I love playing chess, 3 minute and 10 minute time controls-- alex4tm on chess.com :)</li>
          </ul>
        </div>
      </div>
      <div className="about-skills">
        <h2>
          Skills and tools i used in my projects
        </h2>
        <div className="skills-photo" href="../images/skills.jpg">
        </div>
      </div>
    </div>
  );
}

export default About;

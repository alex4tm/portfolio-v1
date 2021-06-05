
import React from 'react';
import { Row, Col } from "reactstrap";
import '../App.css';
import './HeroSection.css';
import './Button.css';
import myPdf from '../images/CV-ILIESI_ALEXANDRU.pdf';

function HeroSection() {
  return (
    <div className='hero-container' id='home'>
        <div className="hero-content">
          <div className="theme-wrapper">

          <svg width="250" height="280">
                <path id="square_path" d="M50,50 h150 a20,20 0 0 1 20,20 v150 a20,20 0 0 1 -20,20 h-150 a20,20 0 0 1 -20,-20 v-150 a20,20 0 0 1 20,-20 z" fill="none" stroke="white" strokeWidth="0" />
              <text y="20" fontSize="30" fontFamily="PT Sans, sans-serif" fill="lightgray" opacity="0.5">
                <textPath href="#square_path" id="text_path" className="square_text" startOffset="0">
                  choose a theme
                </textPath>
              </text>
          </svg>
          <div id="test">
          </div>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <h1>Hello, I'm Alex</h1>
          <p>Software developer</p>
          <div className='hero-btns'>
             <Row>
                <Col md={{ size: 8, offset: 2 }}>
                  <div >
                    <a
                      download={myPdf}
                      href={myPdf}
                      className="btn btn--outline btn--medium"
                    >
                      Download Resume
                    <i className="far fa-arrow-alt-circle-down"></i>
                    </a>
                  </div>
                </Col>
              </Row>
          </div>
        </div>
    </div>
  );
}


document.addEventListener("DOMContentLoaded", async function() {
  const moveText = document.querySelector('#text_path');
   function updateMoveText(offset) {
    let currentOffset = parseInt(moveText.getAttribute('startOffset'));
    if (currentOffset <= 750) {
      moveText.setAttribute("startOffset", (currentOffset + 2));
    } else {
        moveText.setAttribute("startOffset", (0));
    }
};

 setInterval(updateMoveText, 50);
});

export default HeroSection;


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
                <animateTransform attributeName="transform" type="translate" from="360 0 0" to="0 0 0" dur="1s" repeatCount="indefinite" />
            <path id="square_path" d="M50,50 h150 a20,20 0 0 1 20,20 v150 a20,20 0 0 1 -20,20 h-150 a20,20 0 0 1 -20,-20 v-150 a20,20 0 0 1 20,-20 z" fill="none" stroke="white" strokeWidth="1" />
              <text y="40" font-size="30" font-family="PT Sans, sans-serif">
                <textPath href="#square_path" id="text_path" class="square_text" startOffset="0">
                  choose your theme
                </textPath>
              </text>
          </svg>
          <div id="test">
            <h3>choose a theme</h3>
          </div>
            <h3>dark/light</h3>
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

export default HeroSection;


import React from 'react';
import { Row, Col } from "reactstrap";
import '../App.css';
import './HeroSection.css';
import './Button.css';
import myPdf from '../images/CV-ILIESI_ALEXANDRU.pdf';

function HeroSection() {
  return (
    <div className='hero-container' id='home'>
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
  );
}

export default HeroSection;

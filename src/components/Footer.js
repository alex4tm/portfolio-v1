import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href='https://github.com/alex4tm'
              target="_blank"
              rel='noreferrer'
            >
              <i className='fab fa-github' />
            </a>
            <a
              className='social-icon-link'
              href='https://www.linkedin.com/in/iliesi-alexandru/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

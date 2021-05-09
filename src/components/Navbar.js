import React, { useState } from 'react';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='#home' className='navbar-logo' onClick={closeMobileMenu}>iliesi.alexandru()
            <i className='fas fa-laptop-code' />
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item nav-home'>
              <a href="#home" className="nav-links" onClick={closeMobileMenu}>.home()</a>
            </li>
            <li className='nav-item nav-about'>
              <a href="#about" className="nav-links" onClick={closeMobileMenu}>.about()</a>
            </li>
            <li className='nav-item nav-projects'>
              <a href="#projects" className="nav-links" onClick={closeMobileMenu}>.projects()</a>
            </li>
            <li className='nav-item nav-contact'>
              <a href="#contact" className="nav-links" onClick={closeMobileMenu}>.contact()</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

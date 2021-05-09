import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './components/Observer.css';


ReactDOM.render(<App />, document.getElementById('root'));

const mainNav = document.querySelector(".navbar");

const home = document.querySelector(".hero-btns");
const navHome = document.querySelector(".nav-home");

const projects = document.querySelector(".cards");
const navProjects = document.querySelector(".nav-projects");

const contact = document.querySelector(".contact-container");
const navContact = document.querySelector(".nav-contact");

const sectionOneOptions = {
  rootMargin: "300px 0px 0px 0px",
  threshold: 0.9
};

const homeObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navHome.classList.add("active");
      mainNav.classList.remove("nav-scrolled");
    } else {
      navHome.classList.remove("active");
      mainNav.classList.add("nav-scrolled");
    }
  });
},
sectionOneOptions);

const projectsObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navProjects.classList.add("active");
    } else {
      navProjects.classList.remove("active");
    }
  });
},
sectionOneOptions);

const contactObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navContact.classList.add("active");
    } else {
      navContact.classList.remove("active");
    }
  });
},
sectionOneOptions);


homeObserver.observe(home);
contactObserver.observe(contact);
projectsObserver.observe(projects);

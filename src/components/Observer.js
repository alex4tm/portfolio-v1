import './Observer.css';
const mainObserver = () => {


  const home = document.querySelector(".hero-btns");
  const navHome = document.querySelector(".nav-home");

  const about = document.querySelector("#about");
  const navAbout = document.querySelector(".nav-about");

  const projects = document.querySelector(".projects__container");
  const navProjects = document.querySelector(".nav-projects");

  const contact = document.querySelector(".contact-container");
  const navContact = document.querySelector(".nav-contact");

  const sectionOneOptions = {
    rootMargin: "-180px"
  };

  const homeObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navHome.classList.add("active");
      } else {
        navHome.classList.remove("active");
      }
    });
  },
  sectionOneOptions);

  const aboutObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAbout.classList.add("active");
      } else {
        navAbout.classList.remove("active");
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
    aboutObserver.observe(about);
    projectsObserver.observe(projects);
    contactObserver.observe(contact);
}

export default mainObserver;

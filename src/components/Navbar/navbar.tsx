'use client';

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'new-skills', 'education-experience', 'works', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string): void => {
    setShowMenu(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <img
        src="/assets/logo.png"
        alt="Logo"
        className="logo"
        onClick={() => scrollTo('intro')}
        style={{ cursor: 'pointer' }}
      />
      <div className="desktopMenu">
        <span
          className={`desktopMenuListItem ${activeSection === 'intro' ? 'active' : ''}`}
          onClick={() => scrollTo('intro')}
        >
          Home
        </span>
        <span
          className={`desktopMenuListItem ${activeSection === 'new-skills' ? 'active' : ''}`}
          onClick={() => scrollTo('new-skills')}
        >
          Skills
        </span>
        <span
          className={`desktopMenuListItem ${activeSection === 'education-experience' ? 'active' : ''}`}
          onClick={() => scrollTo('education-experience')}
        >
          Experience
        </span>
        <span
          className={`desktopMenuListItem ${activeSection === 'works' ? 'active' : ''}`}
          onClick={() => scrollTo('works')}
        >
          Projects
        </span>
      </div>
      <button type="button" className="desktopMenuBtn" onClick={() => scrollTo('contact')}>
        <img src="/assets/contact.png" alt="" className="desktopMenuImg" />
        Contact Me
      </button>

      <img
        src="/assets/menu.png"
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <span className="listItem" onClick={() => scrollTo('intro')}>Home</span>
        <span className="listItem" onClick={() => scrollTo('new-skills')}>Skills</span>
        <span className="listItem" onClick={() => scrollTo('education-experience')}>Experience</span>
        <span className="listItem" onClick={() => scrollTo('works')}>Projects</span>
        <span className="listItem" onClick={() => scrollTo('contact')}>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;

'use client';

import React from 'react';
import DownloadResumeButton from './DownloadResumeButton';

const Hero: React.FC = () => {
  return (
    <section id="intro">
      <div className="profile">
        <div className="profileImageContainer">
          <img src="/assets/profile.jpg" alt="Mohd Umar" className="profileImage" />
        </div>
        <div className="introContent">
          <h1>
            Hi, 👋 I'm <span className="highlightName">Mohd Umar</span> <span className="wave"></span>
          </h1>
          <h2>Software Developer</h2>
          <ul className="details">
            <li>
              <span role="img" aria-label="work">💼</span>
              <span>Software Developer at <strong>OpCode Academy</strong> (LMS Backend Lead)</span>
            </li>
            <li>
              <span role="img" aria-label="education">🎓</span>
              <span>BCA Graduate (2025) • <strong>Shri Lal Bahadur Shastri Degree College</strong></span>
            </li>
            <li>
              <span role="img" aria-label="location">📍</span>
              <span>Based in India</span>
            </li>
            <li>
              <span role="img" aria-label="email">📧</span>
              <span>mdumar2506@gmail.com</span>
            </li>
          </ul>
          <DownloadResumeButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;

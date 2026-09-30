'use client';

import React from 'react';
import DownloadResumeButton from '../../ui/downloadResumeButton';

const Intro: React.FC = () => {
  return (
    <section id="intro">
      <div className="profile">
        <div className="profileImageContainer">
          <img src="/assets/profile.jpg" alt="Profile" className="profileImage" />
        </div>
        <div className="introContent">
          <h1>
            Hi, 👋 I&apos;m <span className="highlightName">Mohd Umar</span>{' '}
            <span className="wave"></span>
          </h1>
          <h2>Software Developer</h2>
          <ul className="details">
            <li>
              <span role="img" aria-label="work">💼</span>
              Software Developer at <strong>OpCode Academy</strong> (LMS Backend Lead)
            </li>
            <li>
              <span role="img" aria-label="education">🎓</span>
              BCA Graduate (2025) — <strong>Shri Lal Bahadur Shastri Degree College</strong>
            </li>
            <li>
              <span role="img" aria-label="location">📍</span>
              Based in India
            </li>
            <li>
              <span role="img" aria-label="email">📧</span>
              mdumar2506@gmail.com
            </li>
          </ul>
          <DownloadResumeButton />
        </div>
      </div>
    </section>
  );
};

export default Intro;

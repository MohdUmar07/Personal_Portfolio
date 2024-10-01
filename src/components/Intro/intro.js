import React from 'react';
import './intro.css';

import profile from '../../assets/profile.jpg';
// import githubIcon from '../../assets/icons/github.svg';
// import linkedinIcon from '../../assets/icons/linkedin.svg';
// import instagramIcon from '../../assets/icons/instagram.svg';
// import xIcon from '../../assets/icons/twitterx.svg';
import DownloadResumeButton from '../../ui/downloadResumeButton';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='profile'>
        <div className='profileImageContainer'>
          <img src={profile} alt='Profile' className='profileImage' />
        </div>
        <div className='introContent'>
          <h1>Hi, 👋 I'm <span className='highlightName'>Mohd Umar</span> <span className='wave'></span></h1>
          <h2>A Web Developer</h2>
          <ul className='details'>
            <li><span role='img' aria-label='location'>📍</span> based in India</li>
            <li><span role='img' aria-label='work'>💼</span> Web Developer Intern at SinQlarity</li>
            <li><span role='img' aria-label='email'>📧</span> umohd9554@gmail.com</li>
          </ul>
          <DownloadResumeButton /> {/* Proper use of the DownloadResumeButton component */}
          {/* <div className="socialLinks">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="socialIcon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="socialIcon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="socialIcon" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src={xIcon} alt="X" className="socialIcon" />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;

import React from 'react';
import './skills.css';

import UI from '../../assets/ui-design.png';
import webdev from '../../assets/web-dev.png';
import Mern from '../../assets/mern.png';

const NewSkills = () => {
  return (
    <section id='new-skills'>
      <span className='newSkillTitle'>My Skills</span>
      <span className='newSkillDesc'>
        As a passionate MERN Stack developer, I possess a wide array of skills that allow me to create dynamic web applications. I continually strive to enhance my skill set and stay updated with the latest technologies.
      </span>
      <div className='newSkillCards'>
        <div className='newSkillCard'>
          <img src={UI} alt='Frontend Development' className='newSkillCardImg' />
          <h2>Frontend Development</h2>
          <p>React, Bootstrap</p>
        </div>
        <div className='newSkillCard'>
          <img src={Mern} alt='Backend Development' className='newSkillCardImg' />
          <h2>Backend Development</h2>
          <p>Node.js, Express.js, Databases(MongoDB, SQL), RESTful APIs </p>
        </div>
        <div className='newSkillCard'>
          <img src={webdev} alt='Soft Skills' className='newSkillCardImg' />
          <h2>Soft Skills</h2>
          <p>Problem Solving, Team Collaboration, Communication, Time Mangagement</p>
        </div>
      </div>
    </section>
  );
};

export default NewSkills;

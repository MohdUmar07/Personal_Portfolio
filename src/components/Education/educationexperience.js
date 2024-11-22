import React from 'react';
import './educationexperience.css'; 

const EducationExperience = () => {
  return (
    <section id='education-experience'>
      <div className='edu-section'>
        <span className='sectionTitle'>Education</span>
        <div className='eduItem'>
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p><strong>Shri Lal Bahadur Shastri Degree College</strong></p>
          <p>2022 - Present</p>
        </div>
        <hr></hr>
        <div className='eduItem'>
          <h3>Intermediate</h3>
          <p><strong>Taj Inter College</strong></p>
          <p>2020 - 2022</p>
        </div>
      </div>
      <div className='exp-section'>
        <span className='sectionTitle'>Experience</span>
        <div className='expItem'>
          <h3>Full Stack Developer Intern</h3>
          <p><strong>SinQlarity</strong></p>
          <p>May 2024 - Present</p>
          <p>Developing and maintaining web applications using the MERN stack. Collaborating with team members to deliver scalable solutions and enhance user interfaces.</p>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;

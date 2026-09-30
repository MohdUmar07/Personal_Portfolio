'use client';

import React from 'react';

const EducationExperience: React.FC = () => {
  return (
    <section id="education-experience">
      <div className="edu-section">
        <span className="sectionTitle">Education</span>
        <div className="eduItem">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p><strong>Shri Lal Bahadur Shastri Degree College, Gonda</strong></p>
          <p>2022 - 2025 (Graduated)</p>
        </div>
        <hr />
        <div className="eduItem">
          <h3>Intermediate</h3>
          <p><strong>Taj Inter College</strong></p>
          <p>2020 - 2022</p>
        </div>
      </div>
      <div className="exp-section">
        <span className="sectionTitle">Experience</span>
        <div className="expItem">
          <h3>Software Developer (Backend Lead)</h3>
          <p><strong>OpCode Academy</strong></p>
          <p>Dec 2025 - Present</p>
          <p>
            Leading backend architecture and database modeling for a microservices-based Learning Management System (LMS).
            Guiding frontend team members, working in Agile sprints with AI-assisted debugging, and implementing OWASP security controls & secure HTTP headers.
          </p>
        </div>
        <hr />
        <div className="expItem">
          <h3>Web Developer Intern</h3>
          <p><strong>SinQlarity (Triweb Genesis)</strong></p>
          <p>Aug 2023 - Nov 2024</p>
          <p>
            Collaborated remotely with a Bangalore-based team, mastering full-stack web fundamentals,
            building web modules, and successfully deploying first production web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;

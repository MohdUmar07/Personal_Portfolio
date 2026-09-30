'use client';

import React from 'react';

interface SkillCategory {
  id: number;
  title: string;
  img: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillsData: SkillCategory[] = [
    {
      id: 1,
      title: 'Frontend Development',
      img: '/assets/ui-design.png',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'Redux',
        'Context API',
        'HTML5 & CSS3',
        'Bootstrap',
        'Jest & Testing Library',
      ],
    },
    {
      id: 2,
      title: 'Backend & Database',
      img: '/assets/mern.png',
      skills: [
        'Microservices Architecture',
        'Node.js',
        'Express.js',
        'RESTful APIs',
        'MongoDB',
        'MySQL',
        'OWASP Security Principles',
        'HTTP Security Headers',
        'Git & GitHub',
        'Postman',
      ],
    },
    {
      id: 3,
      title: 'Engineering & Tools',
      img: '/assets/web-dev.png',
      skills: [
        'Agile (Scrum / Kanban)',
        'AI-Assisted Debugging',
        'Frontend Mentoring',
        'Problem Solving',
        'Team Collaboration',
        'Analytical Thinking',
        'Time Management',
        'Application Support',
      ],
    },
  ];

  return (
    <section id="new-skills">
      <span className="newSkillTitle">My Skills</span>
      <span className="newSkillDesc">
        As a Software Developer leading backend architecture for microservices at OpCode Academy, 
        I specialize in scalable backends, database design, modern frontend development, and secure web applications.
      </span>

      <div className="newSkillCards">
        {skillsData.map((category) => (
          <div className="newSkillCard" key={category.id}>
            <div className="cardHeader">
              <img src={category.img} alt={category.title} className="newSkillCardImg" />
              <h2>{category.title}</h2>
            </div>
            <div className="skillTags">
              {category.skills.map((skill, index) => (
                <span key={index} className="skillTag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

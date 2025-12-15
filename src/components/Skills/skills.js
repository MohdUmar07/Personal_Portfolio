import React from 'react';
import './skills.css';

// Keep your existing image imports
import UI from '../../assets/ui-design.png';
import webdev from '../../assets/web-dev.png';
import Mern from '../../assets/mern.png';

const NewSkills = () => {
  // Data extracted directly from your resume
  const skillsData = [
    {
      id: 1,
      title: "Frontend Development",
      img: UI,
      // Source: Resume Skills section [cite: 9, 12]
      skills: [
        "React.js", "Redux", "Context API", 
        "TypeScript", "JavaScript (ES6+)", 
        "HTML5 & CSS3", "Bootstrap", 
        "Jest & Testing Library"
      ]
    },
    {
      id: 2,
      title: "Backend & Database",
      img: Mern,
      // Source: Resume Skills section [cite: 9, 10, 11, 13]
      skills: [
        "Node.js", "Express.js", "RESTful APIs",
        "MongoDB", "MySQL", 
        "Git & GitHub", "Postman"
      ]
    },
    {
      id: 3,
      title: "Soft Skills & Agile",
      img: webdev,
      // Source: Resume Skills section [cite: 12, 14]
      skills: [
        "Problem Solving", "Agile (Scrum/Kanban)", 
        "Team Collaboration", "Analytical Thinking", 
        "Time Management", "Adaptability"
      ]
    }
  ];

  return (
    <section id='new-skills'>
      <span className='newSkillTitle'>My Skills</span>
      <span className='newSkillDesc'>
        As a detail-oriented Web Developer, I specialize in building responsive, scalable applications. 
        I combine technical expertise in the MERN stack with strong analytical thinking to deliver impactful digital experiences.
      </span>
      
      <div className='newSkillCards'>
        {skillsData.map((category) => (
          <div className='newSkillCard' key={category.id}>
            <div className="cardHeader">
                <img src={category.img} alt={category.title} className='newSkillCardImg' />
                <h2>{category.title}</h2>
            </div>
            <div className="skillTags">
                {category.skills.map((skill, index) => (
                    <span key={index} className="skillTag">{skill}</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewSkills;
'use client';

import React from 'react';

interface Project {
  title: string;
  img: string;
  techStack: string;
  githubUrl: string;
  liveUrl?: string;
}

const Works: React.FC = () => {
  const projectsData: Project[] = [
    {
      title: 'OPCODE LMS',
      img: '/assets/opcode_lms.png',
      techStack: 'Tech Stack: Microservices, Node.js, Express, MongoDB, React',
      githubUrl: 'https://github.com/MohdUmar07/opcode_lms',
      liveUrl: 'https://opcode.academy',
    },
    {
      title: 'Quizzy',
      img: '/assets/quizzy_image.png',
      techStack: 'Tech Stack: MERN Stack',
      githubUrl: 'https://github.com/MohdUmar07/Quizzy',
      liveUrl: 'https://quizzy-frontend.onrender.com',
    },
    {
      title: 'Tic-Tac-Toe',
      img: '/assets/tic_tac_toe.png',
      techStack: 'Tech Stack: React.js',
      githubUrl: 'https://github.com/MohdUmar07/TriwebAPI-Learning/tree/main/Projects/tic-tac-toe',
      liveUrl: 'https://tictactoe-mohdumar07s-projects.vercel.app/',
    },
    {
      title: 'To-DO List',
      img: '/assets/todo_app.png',
      techStack: 'Tech Stack: MERN Stack',
      githubUrl: 'https://github.com/MohdUmar07/To-Do-Web-Application',
      liveUrl: 'https://todo.com',
    },
    {
      title: 'Aero Alert',
      img: '/assets/aero_alert.png',
      techStack: 'Tech Stack: React.js & Weather API',
      githubUrl: 'https://github.com/MohdUmar07/AeroAlert-Weather-App',
      liveUrl: 'https://aeroalert-weather.vercel.app/',
    },
  ];

  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        This portfolio showcases my knowledge and experience in web development using React.js and
        the MERN Stack. Below are some of my key projects where I&apos;ve applied technologies like
        MongoDB, Express.js, React.js, and Node.js to build full-stack applications.
      </span>
      <div className="worksImgs">
        {projectsData.map((project, idx) => (
          <div className="workItem" key={idx}>
            <h3 className="projectTitle">{project.title}</h3>
            <img src={project.img} alt={project.title} className="worksImg" />
            <p className="techStack">{project.techStack}</p>
            <div className="workLinks">
              <a
                href={project.githubUrl}
                className="workBtn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="workBtn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;

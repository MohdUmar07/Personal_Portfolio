import React from 'react';
import './work.css';

import pro1 from '../../assets/pro-1.png';
import pro2 from '../../assets/pro-2.png';
import pro3 from '../../assets/pro-3.png';

const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Projects</h2>
      <span className='worksDesc'>
        This portfolio showcases my knowledge and experience in web development using ReactJS and the MERN Stack. Below are some of my key projects, where I've applied technologies like MongoDB, Express.js, React.js, and Node.js to build full-stack applications.
      </span>
      <div className='worksImgs'>
        <div className='workItem'>
          <h3 className='projectTitle'>Quizzy</h3>
          <img src={pro3} alt='project-1' className='worksImg' />
          <p className='techStack'>Tech Stack: MERN Stack</p>
          <div className='workLinks'>
            <a href='https://github.com/MohdUmar07/Quizzy' className='workBtn'>GitHub</a>
            <a href='https://quizzy.com' className='workBtn'>Live Demo</a>
          </div>
        </div>
        <div className='workItem'>
          <h3 className='projectTitle'>Tic-Tac-Toe</h3>
          <img src={pro2} alt='project-2' className='worksImg' />
          <p className='techStack'>Tech Stack: HTML, CSS, JavaScript</p>
          <div className='workLinks'>
            <a href='https://github.com/MohdUmar07/TriwebAPI-Learning/tree/main/Projects/tic-tac-toe' className='workBtn'>GitHub</a>
            <a href='https://tictactoe-mohdumar07s-projects.vercel.app/' className='workBtn'>Live Demo</a>
          </div>
        </div>
        <div className='workItem'>
          <h3 className='projectTitle'>To-DO List</h3>
          <img src={pro1} alt='project-3' className='worksImg' />
          <p className='techStack'>Tech Stack: React, Node.js, Express, MongoDB</p>
          <div className='workLinks'>
            <a href='https://github.com/MohdUmar07/To-Do-Web-Application' className='workBtn'>GitHub</a>
            <a href='https://todo.com' className='workBtn'>Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;

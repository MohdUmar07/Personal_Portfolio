'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/icons/SocialIcons';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: 'fullstack' | 'frontend';
  categoryLabel: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'quizzy',
    title: 'Quizzy',
    subtitle: 'Interactive Full-Stack MERN Quiz Platform',
    description:
      'A full-stack quiz web application with category selection, timed quizzes, instant evaluation, and score tracking built using MongoDB, Express, React, and Node.js.',
    image: '/assets/quizzy_image.png',
    category: 'fullstack',
    categoryLabel: 'MERN Stack',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
    githubUrl: 'https://github.com/MohdUmar07/Quizzy',
    liveUrl: 'https://quizzy-frontend.onrender.com',
    featured: true,
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe',
    subtitle: 'Interactive React Game with State Flow',
    description:
      'A responsive browser game engineered with React.js featuring turn management, move history rollback, and dynamic win/tie condition detection.',
    image: '/assets/tic_tac_toe.png',
    category: 'frontend',
    categoryLabel: 'React.js',
    techStack: ['React.js', 'JavaScript (ES6+)', 'State Management', 'CSS3'],
    githubUrl: 'https://github.com/MohdUmar07/TriwebAPI-Learning/tree/main/Projects/tic-tac-toe',
    liveUrl: 'https://tictactoe-mohdumar07s-projects.vercel.app/',
    featured: true,
  },
  {
    id: 'todo-app',
    title: 'To-Do Task Organizer',
    subtitle: 'MERN Productivity & Task Management System',
    description:
      'A full-stack task manager application supporting complete CRUD operations, priority filtering, completion status, and MongoDB persistent storage.',
    image: '/assets/todo_app.png',
    category: 'fullstack',
    categoryLabel: 'MERN Stack',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    githubUrl: 'https://github.com/MohdUmar07/To-Do-Web-Application',
    liveUrl: 'https://github.com/MohdUmar07/To-Do-Web-Application#readme',
  },
  {
    id: 'aero-alert',
    title: 'Aero Alert',
    subtitle: 'Air Quality & Meteorological Monitor',
    description:
      'A clean dashboard application displaying live atmospheric and weather metrics via third-party REST APIs, designed with modern responsive UI principles.',
    image: '/assets/aero_alert.png',
    category: 'frontend',
    categoryLabel: 'React / API',
    techStack: ['React.js', 'REST APIs', 'RapidAPI', 'Tailwind CSS'],
    githubUrl: 'https://github.com/MohdUmar07',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'frontend'>('all');

  const filteredProjects = projects.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Key Projects
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Production-oriented full-stack MERN applications and interactive client solutions.
          </p>

          {/* Filter Tabs */}
          <div className="pt-3 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-yellow-400 text-neutral-950 shadow-sm'
                  : 'bg-white/5 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'fullstack'
                  ? 'bg-yellow-400 text-neutral-950 shadow-sm'
                  : 'bg-white/5 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              Full Stack & MERN
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'frontend'
                  ? 'bg-yellow-400 text-neutral-950 shadow-sm'
                  : 'bg-white/5 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              Frontend & React
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-xl bg-[#141721] border border-white/10 hover:border-yellow-400/40 overflow-hidden shadow-lg shadow-black/25 transition-all duration-200 group"
            >
              {/* Project Image Preview */}
              <div className="relative h-52 sm:h-56 w-full bg-[#0d0f14] overflow-hidden border-b border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
                
                {/* Category Badge on image */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#0d0f14]/85 backdrop-blur-md text-yellow-300 border border-yellow-400/30">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-yellow-400/90 mb-2">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/5 text-neutral-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions / Buttons */}
                  <div className="flex items-center gap-2.5 pt-3 border-t border-white/5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-white/15 bg-white/5 text-neutral-200 text-xs font-semibold hover:bg-white/10 hover:text-white hover:border-yellow-400/40 transition-all"
                    >
                      <GithubIcon size={14} />
                      Code Repository
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-yellow-400 text-neutral-950 text-xs font-bold hover:bg-yellow-300 transition-all shadow-sm shadow-yellow-400/20 active:scale-95"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* View More on GitHub Callout */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/MohdUmar07?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 bg-white/5 text-neutral-300 hover:text-yellow-400 hover:border-yellow-400/40 hover:bg-white/10 text-xs font-semibold transition-all group"
          >
            <span>Explore Repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, Building2, ChevronRight, ShieldCheck } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  type: 'experience';
  description: string[];
  techStack: string[];
}

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  current: boolean;
  type: 'education';
  description: string[];
  highlights?: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'opcode-academy',
    role: 'Software Developer (Backend & Architecture Lead)',
    company: 'OpCode Academy',
    location: 'India',
    period: 'Dec 2025 - Present',
    current: true,
    type: 'experience',
    description: [
      'Leading backend architecture and database schema design for a microservices-based Learning Management System (LMS).',
      'Guiding and mentoring frontend engineers on API integration, data contracts, and client-side state handling.',
      'Implementing OWASP security standards, protective HTTP headers, and defensive input validation across services.',
      'Collaborating in fast-paced Agile sprints using AI-assisted engineering tools to accelerate debugging and feature shipping.'
    ],
    techStack: ['Microservices', 'Node.js', 'Express.js', 'MongoDB', 'OWASP Security', 'REST APIs', 'Agile'],
  },
  {
    id: 'sinqlarity',
    role: 'Web Developer Intern',
    company: 'SinQlarity (Triweb Genesis)',
    location: 'Bangalore, India (Remote)',
    period: 'Aug 2023 - Nov 2024',
    current: false,
    type: 'experience',
    description: [
      'Gained deep foundational web engineering experience and successfully engineered and deployed first production web applications.',
      'Built responsive, interactive frontend components using React.js and modern styling workflows alongside peers.',
      'Integrated RESTful APIs, optimized asset delivery, and collaborated through Git version control.'
    ],
    techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Git', 'GitHub'],
  },
];

const educationList: EducationItem[] = [
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Shri Lal Bahadur Shastri Degree College, Gonda',
    location: 'India',
    period: '2022 - 2025',
    current: false,
    type: 'education',
    description: [
      'Graduated in 2025 with extensive study in Data Structures, Algorithms, Database Management Systems (DBMS), and Web Technologies.',
      'Collaborated closely with faculty and student peers on practical programming projects and technical coursework.'
    ],
    highlights: ['Graduated 2025', 'Data Structures & DBMS', 'Web Technologies'],
  },
  {
    id: 'intermediate',
    degree: 'Intermediate / Senior Secondary Education',
    institution: 'Taj Inter College',
    location: 'India',
    period: '2020 - 2022',
    current: false,
    type: 'education',
    description: [
      'Completed senior secondary education focusing on Mathematics, Physics, and foundational Computer Science principles.'
    ],
  },
];

export default function EducationExperience() {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Professional software development milestones, backend leadership, and academic computer science foundation.
          </p>

          {/* Filter Tabs */}
          <div className="pt-3 flex items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-yellow-400 text-neutral-950 shadow-sm'
                  : 'bg-white/5 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-yellow-400 text-neutral-950 shadow-sm'
                  : 'bg-white/5 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-yellow-400 text-neutral-950 shadow-sm'
                  : 'bg-white/5 text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Experience Column */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className={`space-y-5 ${activeTab === 'experience' ? 'lg:col-span-2 max-w-3xl mx-auto' : ''}`}>
              <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                <Briefcase className="w-4 h-4 text-yellow-400" />
                <h3 className="text-lg font-bold text-white">Work Experience</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-yellow-400/30 space-y-6">
                {experiences.map((item) => (
                  <div key={item.id} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#141721] border-2 border-yellow-400 group-hover:scale-125 transition-transform" />

                    <div className="p-5 sm:p-6 rounded-xl bg-[#141721] border border-white/10 hover:border-yellow-400/40 transition-all duration-200 shadow-lg shadow-black/25">
                      
                      {/* Period Badge & Current tag */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded bg-yellow-400/10 text-yellow-300 border border-yellow-400/20">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        {item.current && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            Present Role
                          </span>
                        )}
                      </div>

                      {/* Role & Company */}
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {item.role}
                      </h4>
                      <p className="text-xs font-medium text-neutral-300 flex items-center gap-1.5 mt-0.5 mb-3">
                        <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{item.company}</span>
                        <span className="text-neutral-500">•</span>
                        <span className="text-neutral-400">{item.location}</span>
                      </p>

                      {/* Bullet descriptions */}
                      <ul className="space-y-1.5 mb-4">
                        {item.description.map((desc, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                            <ChevronRight className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {item.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/5 text-neutral-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Column */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className={`space-y-5 ${activeTab === 'education' ? 'lg:col-span-2 max-w-3xl mx-auto' : ''}`}>
              <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                <GraduationCap className="w-4 h-4 text-yellow-400" />
                <h3 className="text-lg font-bold text-white">Education</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-white/20 space-y-6">
                {educationList.map((item) => (
                  <div key={item.id} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#141721] border-2 border-white/40 group-hover:border-yellow-400 transition-transform" />

                    <div className="p-5 sm:p-6 rounded-xl bg-[#141721] border border-white/10 hover:border-yellow-400/40 transition-all duration-200 shadow-lg shadow-black/25">
                      
                      {/* Period Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/10">
                          <Calendar className="w-3 h-3 text-neutral-400" />
                          {item.period}
                        </span>
                        {item.highlights && item.highlights[0] && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-yellow-400/10 text-yellow-300 border border-yellow-400/25">
                            {item.highlights[0]}
                          </span>
                        )}
                      </div>

                      {/* Degree & School */}
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {item.degree}
                      </h4>
                      <p className="text-xs font-medium text-neutral-300 flex items-center gap-1.5 mt-0.5 mb-3">
                        <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{item.institution}</span>
                      </p>

                      {/* Descriptions */}
                      <ul className="space-y-1.5">
                        {item.description.map((desc, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/60 shrink-0 mt-1.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {item.highlights && (
                        <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-white/5">
                          {item.highlights.map((hl) => (
                            <span
                              key={hl}
                              className="px-2 py-0.5 rounded text-[11px] font-medium bg-yellow-400/5 text-yellow-300 border border-yellow-400/20"
                            >
                              {hl}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

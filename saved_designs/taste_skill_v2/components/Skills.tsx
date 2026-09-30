'use client';

import React from 'react';
import { 
  Server, 
  Layout, 
  Wrench, 
  Users, 
  ShieldCheck, 
  Sparkles,
  Database
} from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & Microservices',
    badge: 'Core Focus',
    icon: <Server className="w-5 h-5 text-yellow-400" />,
    description: 'Designing distributed backend architectures, database schemas, and robust API contracts.',
    skills: [
      'Microservices Architecture',
      'Node.js & Express.js',
      'MongoDB & Mongoose',
      'RESTful API Design',
      'OWASP Security Principles',
      'Secure HTTP Headers',
      'JWT Authentication',
      'Data Modeling'
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    badge: 'Production UI',
    icon: <Layout className="w-5 h-5 text-yellow-400" />,
    description: 'Building clean, high-performance interfaces and mentoring frontend team implementations.',
    skills: [
      'React.js',
      'Next.js (App Router)',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'State Management (Context/Redux)',
      'Responsive Design',
      'HTML5 & CSS3'
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools & Workflow',
    badge: 'Productivity',
    icon: <Wrench className="w-5 h-5 text-yellow-400" />,
    description: 'Modern version control, cloud deployment pipelines, and AI-accelerated debugging.',
    skills: [
      'Git & GitHub',
      'AI-Assisted Development',
      'Postman API Testing',
      'Vercel & Render Deployment',
      'Linux / Bash CLI',
      'Chrome DevTools',
      'npm & package management'
    ],
  },
  {
    id: 'collaboration',
    title: 'Methodology & Engineering Leadership',
    badge: 'Practice',
    icon: <Users className="w-5 h-5 text-yellow-400" />,
    description: 'Guiding junior engineers, practicing Agile sprints, and delivering user-focused software.',
    skills: [
      'Agile / Scrum Workflow',
      'Frontend Team Mentorship',
      'Cross-Functional Collaboration',
      'Root-Cause Debugging',
      'Clear Technical Communication',
      'Application & IT Support'
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Technical Capabilities
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Engineering scalable backend microservices, robust data structures, and responsive web applications.
          </p>
        </div>

        {/* Skill Cards Grid (Exact 4 cells for 4 categories, rhythmic bento styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-xl bg-[#141721] border border-white/10 hover:border-yellow-400/40 transition-all duration-200 shadow-lg shadow-black/25 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-400/10 border border-yellow-400/25 text-yellow-400">
                      {category.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                    {category.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 mb-5 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-neutral-200 border border-white/5 hover:border-yellow-400/30 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-yellow-400/70" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

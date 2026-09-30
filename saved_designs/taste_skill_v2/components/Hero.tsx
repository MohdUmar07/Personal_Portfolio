'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Briefcase, 
  Mail, 
  Download, 
  ArrowRight, 
  CheckCheck,
  Copy,
  Terminal,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/icons/SocialIcons';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('mdumar2506@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="intro" className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Text / Info Content */}
          <div className="flex-1 text-center lg:text-left space-y-5">
            
            {/* Status Pill (Max 4 text elements: 1. Pill) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for New Opportunities</span>
            </div>

            {/* Main Heading (Max 4 text elements: 2. Headline) */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Mohd Umar
              </h1>
              <p className="text-lg sm:text-xl font-medium text-yellow-400">
                Software Developer at OpCode Academy
              </p>
            </div>

            {/* Subtext (Max 4 text elements: 3. Subtext - exactly 16 words, under 20 words cap) */}
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Architecting microservices, backend data layers, and responsive web applications with Node.js, Express, React, and MongoDB.
            </p>

            {/* Quick Details List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto lg:mx-0 pt-1">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Briefcase className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Backend Lead on LMS Project</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <GraduationCap className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>BCA Graduate (2025)</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Based in India (Remote ready)</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="truncate">mdumar2506@gmail.com</span>
                <button
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="p-1 rounded text-neutral-400 hover:text-white hover:bg-white/10 transition"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Call To Action Buttons (Max 4 text elements: 4. CTAs) */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-yellow-400 text-neutral-950 font-bold text-xs hover:bg-yellow-300 transition-all shadow-sm shadow-yellow-400/20 active:scale-95"
              >
                Get in Touch
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-yellow-400/40 text-neutral-200 hover:text-white font-semibold text-xs transition-all active:scale-95"
              >
                Explore Projects
              </a>

              <a
                href="/Mohd_Umar_Resume.pdf"
                download="Mohd_Umar_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white font-medium text-xs transition-all"
              >
                <Download className="w-3.5 h-3.5 text-yellow-400" />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                Network:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/MohdUmar07"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-yellow-400 hover:border-yellow-400/40 transition-all"
                >
                  <GithubIcon size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohdumar2506/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-yellow-400 hover:border-yellow-400/40 transition-all"
                >
                  <LinkedinIcon size={15} />
                </a>
                <a
                  href="https://twitter.com/@ICodeAlchemist"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter profile"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-yellow-400 hover:border-yellow-400/40 transition-all"
                >
                  <TwitterIcon size={15} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Profile Photo with Refined Framing */}
          <div className="relative shrink-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-1 bg-[#141721] border-2 border-yellow-400/50 shadow-2xl overflow-hidden">
              <Image
                src="/assets/profile.jpg"
                alt="Mohd Umar"
                width={300}
                height={300}
                priority
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Subdued Status Tag */}
            <div className="absolute -bottom-2 right-4 bg-[#141721] border border-yellow-400/30 px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-semibold text-yellow-300">
              <Terminal className="w-3.5 h-3.5 text-yellow-400" />
              <span>Full Stack / Backend</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

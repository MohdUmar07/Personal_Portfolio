'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/icons/SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#0a0c10] text-neutral-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Image
                src="/assets/logo.png"
                alt="Mohd Umar Logo"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
              <span className="text-white font-bold text-base tracking-tight">Mohd Umar</span>
              <span className="text-yellow-400 text-sm">•</span>
              <span className="text-xs text-neutral-400">Software Developer</span>
            </div>
            <p className="text-xs text-neutral-500">
              Copyright &copy; {currentYear} Mohd Umar. All rights reserved.
            </p>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/MohdUmar07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-yellow-400 transition"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohdumar2506/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-yellow-400 transition"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://twitter.com/@ICodeAlchemist"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter profile"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-yellow-400 transition"
              >
                <TwitterIcon size={16} />
              </a>
              <a
                href="mailto:mdumar2506@gmail.com"
                aria-label="Email"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-yellow-400 transition"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="h-5 w-[1px] bg-white/10 hidden sm:block" />

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-yellow-400/30 text-xs font-semibold text-neutral-300 hover:text-white transition group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-yellow-400 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Tech Stack attribution */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-[11px] text-neutral-500">
            Engineered with <span className="text-neutral-300 font-medium">Next.js</span>, <span className="text-neutral-300 font-medium">TypeScript</span>, and <span className="text-neutral-300 font-medium">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

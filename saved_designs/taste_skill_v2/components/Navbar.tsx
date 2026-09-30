'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#intro' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);

          const sections = ['intro', 'skills', 'experience', 'projects', 'contact'];
          const scrollPosition = window.scrollY + 180;

          for (const sectionId of sections) {
            const el = document.getElementById(sectionId);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(sectionId);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d0f14]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#intro"
          onClick={(e) => scrollToSection(e, '#intro')}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="relative w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-105">
            <Image
              src="/assets/logo.png"
              alt="Mohd Umar Logo"
              width={32}
              height={32}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-semibold text-base tracking-tight text-white group-hover:text-yellow-400 transition-colors">
            Mohd Umar<span className="text-yellow-400">.</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-neutral-950 bg-yellow-400 font-semibold shadow-sm shadow-yellow-400/30'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Mohd_Umar_Resume.pdf"
            download="Mohd_Umar_Resume.pdf"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border border-white/15 bg-white/5 text-neutral-200 hover:text-white hover:border-yellow-400/40 hover:bg-white/10 transition-all"
          >
            <FileDown className="w-3.5 h-3.5 text-yellow-400" />
            Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-yellow-400 text-neutral-950 hover:bg-yellow-300 transition-all shadow-sm shadow-yellow-400/20 active:scale-95"
          >
            Get in Touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 focus:outline-none"
        >
          {isOpen ? <X className="w-5 h-5 text-yellow-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0d0f14]/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-yellow-400 text-neutral-950 font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="/Mohd_Umar_Resume.pdf"
                download="Mohd_Umar_Resume.pdf"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/15 bg-white/5 text-neutral-200 text-xs font-semibold"
              >
                <FileDown className="w-4 h-4 text-yellow-400" />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-yellow-400 text-neutral-950 text-xs font-bold hover:bg-yellow-300"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

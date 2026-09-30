import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import EducationExperience from '@/components/EducationExperience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0f14] text-slate-100 flex flex-col selection:bg-yellow-400 selection:text-neutral-950">
      <Navbar />
      <Hero />
      <Skills />
      <EducationExperience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

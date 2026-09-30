import Navbar from '@/temp_portfolio_design/components/Navbar';
import Hero from '@/temp_portfolio_design/components/Hero';
import Skills from '@/temp_portfolio_design/components/Skills';
import EducationExperience from '@/temp_portfolio_design/components/EducationExperience';
import Projects from '@/temp_portfolio_design/components/Projects';
import Contact from '@/temp_portfolio_design/components/Contact';
import Footer from '@/temp_portfolio_design/components/Footer';

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <EducationExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

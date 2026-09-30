import React from 'react';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import NewSkills from './components/Skills/skills';
import EducationExperience from './components/Education/educationexperience';
import Works from './components/Works/work';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App(): React.JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <NewSkills />
      <EducationExperience />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

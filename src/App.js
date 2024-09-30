import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import EducationExperience from "./components/Education/educationexperience";
import Works from "./components/Works/work";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <EducationExperience/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

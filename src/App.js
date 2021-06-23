import './App.css';

import Navbars from './Sections/Navbars';
import LandingPage from './Sections/LandingPage';
import About from './Sections/About';
import Resume from './Sections/Resume';
import Projects from './Sections/Projects';
import Hobbies from './Sections/Hobbies';
import Contact from './Sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbars />
      <LandingPage />
      <About />
      <Resume />
      <Projects />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;

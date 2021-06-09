import './App.css';

import Navbar from './Sections/Navbar';
import LandingPage from './Sections/LandingPage';
import About from './Sections/About';
import Resume from './Sections/Resume';
import Projects from './Sections/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;

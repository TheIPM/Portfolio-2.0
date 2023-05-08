import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from './components/Projects';
import { AboutMe } from './components/aboutMe';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Contact" element={<Contact />} />
            {/* Add other ones */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
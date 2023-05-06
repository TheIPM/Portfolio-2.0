import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from './components/Projects';
import { AboutMe } from './components/aboutMe';
import { Resume } from './components/Resume';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/Resume" element={<Resume />} />
          {/* Add other ones */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

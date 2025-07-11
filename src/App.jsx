
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Music from './pages/Music';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/Projects"style={{ marginRight: 10 }}>Projects</Link>
        <Link to="/Music"style={{ marginRight: 10 }}>Music</Link>
        <Link to="/CV">CV</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/CV" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

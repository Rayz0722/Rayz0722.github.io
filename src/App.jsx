import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CV from "./pages/CV";
import Music from "./pages/Music";
import Tennis from "./pages/project_page/Tennis";
import LostFound from "./pages/project_page/LostFound";
import MultibandDistortion from "./pages/project_page/MultibandDistortion";
import FMSynthesizer from "./pages/project_page/FMSynthesizer";
import SongSeg from "./pages/project_page/SongSeg";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Music">Music</Link>
        <Link to="/CV">CV</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/CV" element={<CV />} />

        {/* Subroutes for each project */}
        <Route path="/projects/song-segmentation" element={<SongSeg />} />
        <Route path="/projects/tennis" element={<Tennis />} />
        <Route path="/projects/lost-found" element={<LostFound />} />
        <Route
          path="/projects/multiband-distortion"
          element={<MultibandDistortion />}
        />
        <Route path="/projects/fmsynthesizer" element={<FMSynthesizer />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

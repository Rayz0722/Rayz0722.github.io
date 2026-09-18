import { useEffect } from "react";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Tennis from "./pages/project_page/Tennis";
import LostFound from "./pages/project_page/LostFound";
import MultibandDistortion from "./pages/project_page/MultibandDistortion";
import FMSynthesizer from "./pages/project_page/FMSynthesizer";
import SongSeg from "./pages/project_page/SongSeg";
import "./App.css";

/** Every route starts at the top — otherwise a long article opens mid-page. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Music">Music</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Music" element={<Music />} />

        {/* Music technology work, linked from the Music page */}
        <Route path="/projects/song-segmentation" element={<SongSeg />} />
        <Route
          path="/projects/multiband-distortion"
          element={<MultibandDistortion />}
        />
        <Route path="/projects/fmsynthesizer" element={<FMSynthesizer />} />

        {/* Software projects, linked from the home page */}
        <Route path="/projects/tennis" element={<Tennis />} />
        <Route path="/projects/lost-found" element={<LostFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

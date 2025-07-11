import { Link } from 'react-router-dom';
import './Projects.css'; 

export default function Projects() {
  return (
    <div className='container'>
      <h1>Projects</h1>

      <div className="projects-container">
          <Link to="/projects/tennis" className="project-block">
         
              <h2>Tennis Bole</h2>
              <p>A platform that helps sports teams discover and recruit talents.</p>
  
          </Link>

          <Link to="/projects/lost&found" className="project-block">
        
              <h2>HoosLost & HoosFound</h2>
              <p>A lost and found website for university community.</p>
      
          </Link>

          <Link to="/projects/multiband-distortion" className="project-block">
      
              <h2>Multi-band Distortion VST</h2>
              <p>A multi-band distortion VST plugin using C++ and JUCE framework.</p>
         
          </Link>
        

          <Link to="/projects/fmsynthesizer" className="project-block">
              <h2>FM Bass Synthesizer</h2>
              <p>A game joystick bass synthesizer using Bela, PureData, and 3D printing.</p>
 
          </Link>

      </div>
    </div>
  );
}

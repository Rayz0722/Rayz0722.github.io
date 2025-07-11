import './Home.css'; 

export default function Home() {
  const linkedInUrl = "https://www.linkedin.com/in/ruiyang-zhou";
  const githubUrl = "https://github.com/Rayz0722";
  const instagramUrl = "https://www.instagram.com/rayzry22";
  const pagetitle = "Ruiyang Zhou's Homepage";
  return (
    
    <div className="profile-container">
      
      <h1>{pagetitle}</h1>
      <div className="social-icons">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className="MyProfile">
        <p>
          Hi there! I'm Ruiyang Zhou, and this is my personal website. Basically, this is a portfolio website showing my area of study, my projects, and even my music.
          I am an incomming student at Georgia Institute of Technology, majored in Computational Science and Enigineering(college of computing). 
        </p>
        <p>
          I am interested in many different fields like computer architecture, high performance computing, and digital signal processing.
          In addition to computer science, I also put a lot of effort into learning music including production and mixing. Therefore, I also enjoy investigating into the intersection of computer science and music.
        </p>
        <p>Email: rzhou343@gatech.edu &nbsp;&nbsp;&nbsp; Personal Email: rz3zv@virginia.edu &nbsp;&nbsp;&nbsp; Tel: 434-257-7610</p>
        <p>Education: University of Virginia, (B.A)Computer Science with Highest Distinction</p>
        <p>Field of Interest: Computer Architecture, Computer Systems, Digital Signal Processing, Music Production, Sound Synthesis, Audio Engineering, etc.</p>
        <p>Programming Languages: C++, Python, x86 Assembly, HTML, C, SQL, Java, JavaScript</p>
        <p>Technology/Environment: Xilinx Vitis, Linux, JUCE, Django, OpenCL, Vivado, Git, Scikit-Learn, TensorFlow, MySQL, Docker, SolidWorks, Arduino, LaTeX, Ableton, Pure Data</p>
      </div>

      <h4>This page will continue to update</h4>
    </div>
  );
}

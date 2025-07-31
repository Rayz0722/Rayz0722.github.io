import "./Home.css";

export default function Home() {
  const linkedInUrl = "https://www.linkedin.com/in/ruiyang-zhou";
  const githubUrl = "https://github.com/Rayz0722";
  const instagramUrl = "https://www.instagram.com/rayzry22";
  const pagetitle = "Ruiyang Zhou's Homepage";
  return (
    <div className="profile-container">
      <h1>{pagetitle}</h1>

      <div className="MyProfile">
        <div className="contact">
          <div className="social-icons">
            <h3>Contact Info</h3>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <div className="text-wrapper">
              <p>
                <em>Email</em>:
              </p>
              <p>&nbsp; &nbsp; rzhou343@gatech.edu</p>
              <p>
                <em>Personal Email</em>:
              </p>
              <p>&nbsp; &nbsp; zhouruiyang2002@gmail.com</p>
              <p>
                <em>Tel</em>: 434-257-7610
              </p>
            </div>
          </div>
        </div>
        <div className="intro">
          <h3>Basic Info</h3>
          <p>
            Hi there! I'm Ruiyang Zhou, and this is my personal website.
            Basically, this is a portfolio website showing my area of study, my
            projects, and even my music. I am an incomming student at Georgia
            Institute of Technology, majored in Computational Science and
            Enigineering(college of computing).
          </p>
          <p>
            I am interested in many different fields like computer architecture,
            high performance computing, and digital signal processing. In
            addition to computer science, I also put a lot of effort into
            learning music including production and mixing. Therefore, I also
            enjoy investigating into the intersection of computer science and
            music.
          </p>
        </div>
        <div className="other-info">
          <h3>Other Info</h3>
          <div className="other-text">
            <p>
              <em>Education</em>: M.S. in Computational Science and Engineering,
              Georgia Institute of Technology (Expected 2027) &nbsp;|&nbsp; B.A.
              in Computer Science with Highest Distinction, University of
              Virginia
            </p>
            <p>
              <em>Field of Interest</em>: Computer Architecture, Computer
              Systems, Digital Signal Processing, Music Production, Sound
              Synthesis, Audio Engineering, etc.
            </p>
            <p>
              <em>Programming Languages</em>: C++, Python, x86 Assembly, HTML,
              C, SQL, Java, JavaScript
            </p>
            <p>
              <em>Tech Skills</em>: SpringBoot, JUCE, Django, React, Flask ,
              Mybatis, Git, Linux, Docker, Postgres SQL, DB2, Heroku, MSSQL,
              Xilinx Vitis, Vivado, Postman, Latex , OpenCL, LLVM, Scikit-Learn,
              TensorFlow, Selenium, Pytorch, SolidWorks, Arduino, Ableton, Pure
              Data
            </p>
          </div>
        </div>
      </div>
      <footer>
        <h4>This page will continue to update</h4>
      </footer>
    </div>
  );
}

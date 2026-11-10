import React from 'react';
import './App.css';
function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2 className="logo">Kamal<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="intro">HELLO, I'M</p>

          <h1>
            Kamal <span>Batcha</span>
          </h1>

          <h2>Aspiring Full Stack Developer</h2>

          <p className="description">
            I'm an IT graduate passionate about building
            modern web applications and solving real-world
            problems through technology.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

       <div className="hero-image">
  <img
    src="/profile.jpg"
    alt="Kamal Batcha"
    className="profile-photo"
  />
</div>
</section>

      <section className="about section" id="about">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
        <p>
          I'm Kamal Batcha, an Information Technology graduate
          interested in Full Stack Development. I enjoy learning
          new technologies and creating practical applications.
          I'm currently focused on improving my development
          skills and building real-world projects.
        </p>
      </section>

      <section className="section" id="skills">
        <p className="section-label">WHAT I WORK WITH</p>
        <h2>My <span>Skills</span></h2>

        <div className="skills-grid">
          {["HTML", "CSS", "JavaScript", "React.js",
            "Node.js", "Express.js", "MySQL", "Python"]
            .map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
        </div>
      </section>

      <section className="section" id="projects">
        <p className="section-label">MY RECENT WORK</p>
        <h2>Featured <span>Projects</span></h2>

        <div className="project-grid">
          <div className="project-card">
            <h3>Smart Traffic Monitoring</h3>
            <p>
              A computer vision-based traffic monitoring
              system with adaptive traffic signal control.
            </p>
            <small>Python · OpenCV · YOLO11</small>
<a
              href={"https://" + "github.com/" + "kamalv3/smart-traffic-monitoring"}
  target="_blank"
  rel="noreferrer"
  className="project-link"
>
  View on GitHub ↗
</a>
          </div>

          <div className="project-card">
            <h3>Employee Management System</h3>
            <p>
              An application designed to manage employee
              records and information.
            </p>
            <small>Java · Spring Boot · MySQL</small>
<a
              href={"https://" + "github.com/" + "kamalv3/employee-management-system"}
  target="_blank"
  rel="noreferrer"
  className="project-link"
>
  View on GitHub ↗
</a>

          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <p className="section-label">LET'S CONNECT</p>
        <h2>Contact <span>Me</span></h2>
        <p>Interested in working together? Let's connect!</p>
        <a href="mailto:YOUR_EMAIL@example.com" className="btn primary">
          Send Email
        </a>
      </section>

      <footer>
        <p>© 2026 Kamal Batcha. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


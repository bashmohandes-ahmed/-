import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">AF</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        {/* About Me */}
        <section id="about" className="about-section">
          <h1>About Me</h1>
          <p>
            I'm Ahmed Farag, a passionate software engineer specializing in communication and computer engineering. My interests span AI, robotics, and embedded systems, and I've contributed to projects ranging from autonomous vehicles to smart IoT solutions. I thrive in collaborative environments and enjoy solving real-world problems using technology.
          </p>
          <h2>Technical Expertise</h2>
          <div className="tech-grid">
            <div>
              <h3>Programming Languages</h3>
              <ul>
                <li>Java</li>
                <li>Python</li>
                <li>CSS</li>
                <li>C</li>
                <li>C++</li>
              </ul>
            </div>
            <div>
              <h3>Frameworks & Technologies</h3>
              <ul>
                <li>Express</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div>
              <h3>Development Tools</h3>
              <ul>
                <li>VS Code</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
            <div>
              <h3>Languages</h3>
              <ul>
                <li>English (Fluent)</li>
                <li>Arabic (Native)</li>
                <li>German (A2)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="experience-section">
          <h2>Leadership / Experience</h2>
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>A&A</h3>
                <span className="timeline-role">Software Engineer</span>
                <span className="timeline-date">Remote | Aug 2024 – Present</span>
                <ul>
                  <li>Worked as a software engineer contributing to various engineering projects.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-content">
                <h3>Formula MNU</h3>
                <span className="timeline-role">Software & Autonomous Systems</span>
                <span className="timeline-date">Hybrid | Nov 2024 – Present</span>
                <ul>
                  <li>Worked in the engine team to develop the software of the engine for the Formula MNU project.</li>
                  <li>Contributed to the autonomous team on developing self-driving features.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>Breakin Point</h3>
                <span className="timeline-role">Hardware Camp Member</span>
                <span className="timeline-date">Onsite | Feb 2025 – Mar 2025</span>
                <ul>
                  <li>Participated as a member of the Hardware Camp, gaining hands-on experience with hardware projects.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="projects-section">
          <h2>Projects</h2>
          <p>
            Explore some of the projects I've worked on, showcasing my technical and problem-solving skills.
          </p>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-title">Student Engineering Competition Project</div>
              <div className="project-date">Nov 2024</div>
              <div className="project-desc">
                <ul>
                  <li>Developed engine software for a Formula Car in a Middle East-wide competition.</li>
                  <li>Worked on a self-driving electric car, developing autonomous driving software.</li>
                </ul>
              </div>
              <div className="tags">
                <span>Teamwork</span>
                <span>Autonomous Systems</span>
                <span>Formula Car</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-title">Smart Fire-Detection Robot Car</div>
              <div className="project-date">Oct 2024</div>
              <div className="project-desc">
                <ul>
                  <li>Designed and developed a remote-controlled, semi-autonomous robot for fire and environmental monitoring.</li>
                  <li>Integrated heat, smoke, and temperature sensors; remote Bluetooth control; and programmable movement.</li>
                  <li>Features: MQ-2 smoke sensor, DHT11 temperature sensor, Bluetooth module, DC motors.</li>
                </ul>
              </div>
              <div className="tags">
                <span>Robotics</span>
                <span>IoT</span>
                <span>Embedded</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact-section">
          <h2>Contact Me</h2>
          <form
            className="contact-form"
            onSubmit={e => {
              window.open(
                `mailto:ahmedusamaofficial1@gmail.com?subject=Portfolio Inquiry&body=Name:%0AEmail:%0AMessage:`,
                "_blank"
              );
              e.preventDefault();
            }}
          >
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="6" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-info">
            <p>Email: <a href="mailto:ahmedusamaofficial1@gmail.com">ahmedusamaofficial1@gmail.com</a></p>
            <p>Alternate: <a href="mailto:ahmedusama1256@gmail.com">ahmedusama1256@gmail.com</a></p>
            <p>Phone: +201158025442</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

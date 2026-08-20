import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import neethuPhoto from "./assets/Neethu Papa's.jpeg";

const navItems = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Experience",
  "Contact",
];

const skills = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "SQL",
  "Git",
  "GitHub",
  "VS Code",
  "Eclipse",
  "OOPs",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Background */}
      <div className="noise"></div>
      <div className="orb orb-one"></div>
      <div className="orb orb-two"></div>
      <div className="grid-bg"></div>

      {/* NAVBAR */}
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-container">
          <button
            className="brand"
            onClick={() => scrollToSection("home")}
          >
            NEETHU<span>.</span>
          </button>

          <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase())
                }
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main>

        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="hero-container">

            <div className="hero-left">
              <div className="availability">
                <span></span>
                AVAILABLE FOR OPPORTUNITIES
              </div>

              <p className="hero-intro">
                HELLO, I'M
              </p>

              <h1>
                Neethu
                <br />
                <span>V.</span>
              </h1>

              <div className="hero-line"></div>

              <h2>
                Computer Science
                <br />
                <em>Graduate & Developer.</em>
              </h2>

              <p className="hero-description">
                Passionate about transforming ideas into meaningful
                technology solutions through programming,
                problem-solving and continuous learning.
              </p>

              <div className="hero-actions">
                <button
                  className="btn-primary"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                  <span>↗</span>
                </button>

                <button
                  className="btn-text"
                  onClick={() => scrollToSection("contact")}
                >
                  Let's Talk
                  <span>↓</span>
                </button>
              </div>
            </div>

            {/* PHOTO CARD */}
            <div className="hero-right">

              <div className="hero-card">

                <div className="card-top">
                  <span>NV</span>

                  <span className="card-status">
                    ● ONLINE
                  </span>
                </div>

                <div className="hero-avatar">
                  <img
                    src={neethuPhoto}
                    alt="Neethu V"
                    className="profile-photo"
                  />
                </div>

                <div className="hero-card-bottom">

                  <div>
                    <small>ROLE</small>
                    <strong>Developer</strong>
                  </div>

                  <div>
                    <small>LOCATION</small>
                    <strong>Kerala, India</strong>
                  </div>

                </div>

              </div>

              <div className="floating floating-one">
                <span>01</span>

                <div>
                  <strong>8.2 CGPA</strong>
                  <small>Academic Excellence</small>
                </div>
              </div>

              <div className="floating floating-two">
                <span>02</span>

                <div>
                  <strong>2 Major Projects</strong>
                  <small>Built with AI & ML</small>
                </div>
              </div>

            </div>

          </div>

          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <div></div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">

          <div className="section-label">
            <span>01</span>
            ABOUT ME
          </div>

          <div className="about-layout">

            <div className="about-title">
              <h2>
                Curiosity drives me.
                <br />
                <em>Technology inspires me.</em>
              </h2>
            </div>

            <div className="about-content">

              <p>
                I am an Integrated M.Tech Computer Science and
                Engineering graduate who enjoys solving problems
                and creating practical technology solutions.
              </p>

              <p>
                With a strong foundation in programming and software
                development, I continuously explore new technologies
                and look for opportunities to learn, collaborate
                and grow.
              </p>

              <div className="education-card">

                <div className="education-number">
                  2021 — 2026
                </div>

                <div>
                  <span>EDUCATION</span>

                  <h3>
                    Integrated M.Tech
                  </h3>

                  <p>
                    Computer Science & Engineering
                  </p>

                  <small>
                    Sri Krishna College of Engineering and Technology
                  </small>
                </div>

                <strong>8.2</strong>

              </div>

            </div>

          </div>

        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects">

          <div className="section-header">

            <div className="section-label">
              <span>02</span>
              SELECTED WORK
            </div>

            <p>
              A selection of projects focused on solving
              meaningful real-world problems.
            </p>

          </div>

          <div className="project-list">

            {/* PROJECT 1 */}
            <article className="project-item">

              <div className="project-index">
                01
              </div>

              <div className="project-main">

                <span className="project-category">
                  MACHINE LEARNING
                </span>

                <h2>
                  SepCure
                </h2>

                <h3>
                  Early Sepsis Prediction System
                </h3>

                <p>
                  Developed a machine learning model using Python
                  to predict the early onset of sepsis using patient
                  vitals and laboratory results.
                </p>

                <div className="project-tags">
                  <span>Python</span>
                  <span>Machine Learning</span>
                  <span>Data Analysis</span>
                </div>

              </div>

              <div className="project-details">

                <p>
                  Analyzed important patient features to support
                  early disease detection and timely clinical
                  intervention.
                </p>

                <div className="project-arrow">
                  ↗
                </div>

              </div>

            </article>

            {/* PROJECT 2 */}
            <article className="project-item">

              <div className="project-index">
                02
              </div>

              <div className="project-main">

                <span className="project-category">
                  DEEP LEARNING
                </span>

                <h2>
                  AcciSense
                </h2>

                <h3>
                  Automatic Accident Detection & Alert System
                </h3>

                <p>
                  A smart accident detection system designed to
                  identify crashes from visual data and trigger
                  automated emergency alerts.
                </p>

                <div className="project-tags">
                  <span>YOLOv8</span>
                  <span>Computer Vision</span>
                  <span>Deep Learning</span>
                </div>

              </div>

              <div className="project-details">

                <p>
                  Implemented real-time crash detection to improve
                  accident identification and reduce emergency
                  response time.
                </p>

                <div className="project-arrow">
                  ↗
                </div>

              </div>

            </article>

          </div>

        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">

          <div className="section-label">
            <span>03</span>
            TECHNICAL TOOLKIT
          </div>

          <div className="skills-heading">

            <h2>
              The tools behind
              <br />
              <em>my work.</em>
            </h2>

            <p>
              A growing technical foundation built through
              education, projects and hands-on development.
            </p>

          </div>

          <div className="skills-grid">

            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {skill}
                </h3>

                <div className="skill-line"></div>

              </div>
            ))}

          </div>

        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="section experience"
        >

          <div className="section-label">
            <span>04</span>
            EXPERIENCE
          </div>

          <div className="experience-grid">

            <div className="experience-title">

              <h2>
                Learning by
                <br />
                <em>building.</em>
              </h2>

            </div>

            <div className="experience-card">

              <div className="experience-top">
                <span>2026</span>
                <span>01</span>
              </div>

              <h3>
                Java Full Stack
              </h3>

              <h4>
                Cognizant Technology Solutions
              </h4>

              <p className="experience-location">
                Coimbatore, Tamil Nadu
              </p>

              <div className="experience-line"></div>

              <ul>
                <li>
                  Trained in Java, SQL and Full-Stack Development.
                </li>

                <li>
                  Worked on hands-on assignments and mini-projects.
                </li>

                <li>
                  Developed and tested application modules.
                </li>

                <li>
                  Participated in Agile practices and code reviews.
                </li>

                <li>
                  Gained experience with Git and collaborative
                  software development.
                </li>
              </ul>

            </div>

          </div>

        </section>

        {/* CERTIFICATIONS */}
        <section className="section certifications">

          <div className="section-label">
            <span>05</span>
            CONTINUOUS LEARNING
          </div>

          <div className="certifications-list">

            <div className="cert-row">
              <span>01</span>
              <h3>HackerRank</h3>
              <p>Java Basics</p>
            </div>

            <div className="cert-row">
              <span>02</span>
              <h3>EDUREKA</h3>
              <p>Web Developer</p>
            </div>

            <div className="cert-row">
              <span>03</span>
              <h3>Infosys</h3>
              <p>Certification</p>
            </div>

            <div className="cert-row">
              <span>04</span>
              <h3>NPTEL</h3>
              <p>Online Learning & Certification</p>
            </div>

          </div>

        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">

          <div className="contact-container">

            <div className="contact-small">
              <span>06</span>
              GET IN TOUCH
            </div>

            <h2>
              Let's create
              <br />
              something
              <br />
              <em>meaningful.</em>
            </h2>

            <div className="contact-bottom">

              <a
                href="mailto:neethuv402@gmail.com"
                className="email"
              >
                neethuv402@gmail.com
                <span>↗</span>
              </a>

              <div className="contact-info">
                <p>PALAKKAD, KERALA</p>
                <p>INDIA</p>
              </div>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>

        <div>
          © 2026 NEETHU V
        </div>

        <button
          onClick={() => scrollToSection("home")}
        >
          BACK TO TOP ↑
        </button>

        <div>
          PORTFOLIO
        </div>

      </footer>

    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(<App />);
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import './App.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  // Close menu when resizing to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 769 && open) {
        setOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [open])

  return (
    <>
      {open && (
        <div
          className="navbar-backdrop"
          onClick={() => setOpen(false)}
        />
      )}
      <header className={`navbar-modern ${open ? 'menu-open' : ''}`}>
        <nav className="navbar-container">
          <a className="navbar-brand" href="#home" onClick={() => setOpen(false)}>Anat Alphonse T</a>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
            className={`navbar-toggle ${open ? 'open' : ''}`}
            aria-expanded={open}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
          <div className={`navbar-menu ${open ? 'open' : ''}`}>
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#education" onClick={() => setOpen(false)}>Education</a>
            <a className="navbar-btn-secondary" href="/Anat_Alphonset.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Resume</a>
            <a className="navbar-btn-secondary" href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </nav>
      </header>
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">© {new Date().getFullYear()} Anat Alphonse T</footer>
  )
}

function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="hero-avatar">
          <img src="/profile.png" alt="Anat Alphonset profile" />
        </div>
        <div className="hero-badges">
          <a className="hero-badge-link" href="https://www.linkedin.com/in/anatalphonset" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="hero-badge-link" href="https://github.com/anatalphonse" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <h1 className="hero-title">ANAT ALPHONSE T</h1>
        <p className="hero-subtitle">Python Full‑Stack Developer · Palakkad, Kerala · <a href="tel:+919074391595">+91 9074391595</a> · <a href="mailto:anatalphonset@gmail.com">anatalphonset@gmail.com</a></p>
        <p className="hero-description">Python full‑stack developer building asynchronous  scalable frontend using ReactJS, TailwindCSS & REST APIs with FastAPI & SQLAlchemy. secure authentication with JWT & RBAC. PostgreSQL schema design with Alembic. Dockerized CI/CD with GitHub Actions; and clean, maintainable UIs.</p>
        <div className="hero-actions">
          <a className="button" href="/Anat_Alphonset.pdf" target="_blank" rel="noopener noreferrer">Get Resume</a>
          <a className="button ghost" href="#projects">View Projects</a>
        </div>
        <div className="hero-tags">
          {['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'JWT/RBAC', 'Docker', 'CI/CD'].map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <p>
        Python full-stack developer with hands-on experience building asynchronous scalable frontend using ReactJS, TailwindCSS &
        REST APIs using FastAPI and SQLAlchemy. Skilled in designing secure authentication (JWT, RBAC),
        database schema design and migrations (PostgreSQL, Alembic), containerization (Docker) and CI/CD
        (GitHub Actions). Comfortable implementing user-facing interfaces with HTML/CSS/JavaScript and
        delivering maintainable, testable systems that solve real business problems.
      </p>


    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <h3>Core Skills</h3>
      <div className="chip-grid">
        {['FastAPI', 'ReactJS', 'TailwindCSS', 'REST API', 'SQLAlchemy', 'PostgreSQL', 'Alembic', 'JWT', 'RBAC', 'Async/Await', 'Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Postman', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'ORM', 'CRUD', 'Testing', 'Performance tuning', 'Schema design'].map((s) => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>
      <h3>Technical Skills</h3>
      <ul className="list">
        <li><strong>Languages</strong>: Python, JavaScript, HTML, CSS</li>
        <li><strong>Frameworks / Libraries</strong>: FastAPI, Reactjs, TailwindCSS, SQLAlchemy, Bootstrap, jQuery, Django</li>
        <li><strong>Databases</strong>: PostgreSQL</li>
        <li><strong>DevOps / Tools</strong>: Docker, Git, GitHub, GitHub Actions, Postman, Alembic</li>
        <li><strong>Design / Prototyping</strong>: Figma, Canva</li>
      </ul>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <h3>Ekaksha Technologies — Web Developer</h3>
      <p>Apr 2025 – Present</p>
      <ul className="list">
        <li>Built and maintained asynchronous  scalable frontend using ReactJS, TailwindCSS & REST APIs with FastAPI and SQLAlchemy for high concurrency.</li>
        <li>Implemented JWT-based authentication and RBAC to secure endpoints and enforce permissions.</li>
        <li>Integrated PostgreSQL via SQLAlchemy ORM and managed schema changes with Alembic migrations.</li>
        <li>Created and executed Postman collections for API validation; collaborated on responsive UI with HTML, CSS, Bootstrap.</li>
      </ul>

      <h3>Softroniics — Python Developer Intern</h3>
      <p>Sept 2024 – Mar 2025</p>
      <ul className="list">
        <li>Assisted in developing web applications using Python, Django, HTML, CSS, JavaScript, and
          Bootstrap</li>
        <li>Worked on backend development with Django, handling database management using
          PostgreSQL</li>
        <li>Developed responsive front-end interfaces using modern CSS frameworks Bootstrap &
          Tailwind</li>
      </ul>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="card-grid">
        <article className="card">
          <h3>CRM using FastAPI — 2025</h3>
          <p className="card-meta">FastAPI · SQLAlchemy · PostgreSQL · JWT · RBAC · Alembic</p>
          <ul className="list">
            <li>Implemented auth with JWT and role-based access control.</li>
            <li>CRUD for customer records with SQLAlchemy ORM.</li>
            <li>Advanced filtering and search via query parameters.</li>
            <li>Async endpoints and connection handling for high concurrency.</li>
            <li>Managed migrations with Alembic; documented with Postman/OpenAPI.</li>
          </ul>
          <div className="card-actions">
            <a className="button small" href="https://github.com/anatalphonse/CRM" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </article>
        <article className="card">
          <h3>Django E‑commerce Web Application — 2024</h3>
          <p className="card-meta">Django · PostgreSQL · Bootstrap</p>
          <ul className="list">
            <li>Product management, authentication, cart, and order processing.</li>
            <li>Responsive UI using Bootstrap; integrated backend order APIs.</li>
          </ul>
          <div className="card-actions">
            <a className="button small" href="https://github.com/anatalphonse/ecommerce" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </article>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:anatalphonset@gmail.com">anatalphonset@gmail.com</a></p>
      <p>Phone: <a href="tel:+919074391595">+91 9074391595</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/anatalphonset" target="_blank" rel="noopener noreferrer">linkedin.com/in/anatalphonset</a></p>
      <p>GitHub: <a href="https://github.com/anatalphonse" target="_blank" rel="noopener noreferrer">github.com/anatalphonse</a></p>
    </section>
  )
}

export default function App() {
  return (
    <div className="layout min-h-screen">
      <Navbar />
      <main className="content">
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <section id="education" className="section">
          <h2>Education</h2>
          <ul className="list">
            <li>
              <strong>Bachelor of Science (B.Sc.) — Computer Science</strong><br />
              Model College of Applied Science Kuzhalmannam (University of Calicut) · Oct 2021 – May 2024
            </li>
          </ul>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

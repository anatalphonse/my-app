import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to desktop to avoid stale open state
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen(prev => !prev);
  }

  function handleNavClick() {
    setIsOpen(false);
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <a href="#home" className={styles.brand} onClick={handleNavClick}>
          Jane Doe
        </a>

        <button
          className={`${styles.menuToggle} ${isOpen ? styles.menuToggleOpen : ''}`}
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${isOpen ? styles.open : ''}`}
          aria-label="Primary"
        >
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#home" className={styles.navLink} onClick={handleNavClick}>Home</a>
            </li>
            <li className={styles.navItem}>
              <a href="#about" className={styles.navLink} onClick={handleNavClick}>About</a>
            </li>
            <li className={styles.navItem}>
              <a href="#projects" className={styles.navLink} onClick={handleNavClick}>Projects</a>
            </li>
            <li className={styles.navItem}>
              <a href="#contact" className={styles.navLink} onClick={handleNavClick}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}



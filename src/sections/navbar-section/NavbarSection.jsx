import { useState } from 'react';
import { reignStudioLogo } from '@assets';
import { NAV_LINKS } from '@constants';
import clsx from 'clsx';
import styles from './NavbarSection.module.css';

export const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle the scroll without changing the URL
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Prevents the #id from being added to the URL
    
    const id = targetId.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <header className={styles.navbarWrapper}>
      <nav className={styles.navbarContainer}>
        {/* Logo - Scrolls to top */}
        <a 
          className={styles.logoLink} 
          href="/" 
          onClick={(e) => handleScroll(e, 'home')}
        >
          <img alt="Reign Studio" className={styles.logo} src={reignStudioLogo} />
        </a>

        {/* Desktop Navigation */}
        <ul className={styles.navMenu}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a 
                className={styles.navLink} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          aria-label="Toggle Menu"
          className={styles.hamburger} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={clsx(styles.bar, isMenuOpen && styles.barActive)}></span>
        </button>

        {/* Mobile Navigation Overlay */}
        <ul className={clsx(styles.mobileMenu, isMenuOpen && styles.mobileMenuOpen)}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a 
                className={styles.mobileNavLink} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <button
          className="mobile-menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span><span></span><span></span>
        </button>

        <a className="brand" href="#home" onClick={closeMenu} aria-label="Dev Stack home">
          <img src="/assets/logo-text.png" alt="Dev Stack" />
        </a>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <a className="active" href="#home" onClick={closeMenu}>Home</a>
          <a href="#technologies" onClick={closeMenu}>Technologies</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="auth-actions">
          <button className="sign-in" onClick={() => window.alert('Sign In is ready for your authentication flow.')}>Sign In</button>
          <button className="sign-up" onClick={() => window.alert('Sign Up is ready for your registration flow.')}>Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

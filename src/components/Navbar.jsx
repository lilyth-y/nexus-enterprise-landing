import React, { useState, useEffect } from 'react';

const Navbar = ({ onSignUp }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo gradient-text">NEXUS</div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#infrastructure">Infrastructure</a></li>
        <li><a href="#analytics">Analytics</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
      <div className="nav-cta">
        <button className="btn btn-outline">Log In</button>
        <button className="btn btn-primary" onClick={onSignUp}>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;

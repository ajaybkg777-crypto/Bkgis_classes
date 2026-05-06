import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import "../styles/Navbar.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/results", label: "Results" },
  { to: "/faculty", label: "Faculty" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/assets/logo.png" alt="BKG Classes" />
          <div className="logo-text">
            <span className="logo-name">BKG Classes</span>
            <span className="logo-tagline">Best Coaching in Khargone</span>
          </div>
        </NavLink>

        <nav className="navbar-menu" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className="nav-link"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
  <a
    href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20know%20about%20admission"
    target="_blank"
    rel="noopener noreferrer"
    className="enroll-btn"
  >
    Enroll Now <Flame size={16} />
  </a>
</div>

        <button
          type="button"
          className={`mobile-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && (
        <motion.nav
          className="mobile-menu"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink to="/contact" className="mobile-enroll" onClick={closeMenu}>
            Enroll Now <Flame size={16} />
          </NavLink>
        </motion.nav>
      )}
    </header>
  );
}

import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGraduationCap,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <div className="footer-logo">
            <FaGraduationCap className="logo-icon" />
            <div>
              <h3>BKG Classes</h3>
              <span>Best Coaching in Khargone</span>
            </div>
          </div>
          <p>
            Since 2002, BKG Classes has helped students learn better and perform
            with confidence.
          </p>
          <div className="footer-badges">
            <span>Expert Faculty</span>
            <span>Regular Tests</span>
            <span>Personal Guidance</span>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt className="footer-icon" />
             <a
  href="https://www.google.com/maps?q=BKG+Classes+Khargone+Madhya+Pradesh"
  target="_blank"
  rel="noreferrer"
>
  BKG Classes, Khargone, Madhya Pradesh
</a>
            </p>
            <p>
              <FaPhoneAlt className="footer-icon" />
              <a href="tel:9826763101">098267 63101</a>
            </p>
            <p>
              <FaEnvelope className="footer-icon" />
              <a href="mailto:info@bkgis.in">info@bkgis.in</a>
            </p>
          </div>
        </div>

        <div className="footer-section footer-social-section">
          <h3>Stay Connected</h3>
          <p className="footer-social-text">
            Follow updates and announcements.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <strong>BKG Classes</strong> | Shaping Futures with Excellence
        </p>
      </div>
    </footer>
  );
}

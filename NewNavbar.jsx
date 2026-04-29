import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/dott.png";
import "../../../styles/newnavbar.css";

const NewNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeMenu = () => setMenuOpen(false);
  const closeDropdown = () => setDropdownOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="dot-navbar" ref={menuRef}>
      {/* Logo */}
      <div className="dot-navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="The DOT" />
        </Link>
      </div>

      {/* Hamburger */}
      <div className="dot-navbar-menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links */}
      <ul className={`dot-navbar-links ${menuOpen ? "dot-navbar-links-active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        {/* <li><Link to="/faculty" onClick={closeMenu}>Teachers</Link></li> */}
        <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li><Link to="/career-streams" onClick={closeMenu}>Career Library</Link></li>

        {/* View Result Dropdown */}
        <li className="dot-navbar-dropdown" ref={dropdownRef}>
          <span
            className="dot-navbar-dropdown-toggle"
            onClick={toggleDropdown}
          >
            View Result
            {/* <span className={`dot-navbar-arrow ${dropdownOpen ? "open" : ""}`}>▼</span> */}
          </span>
          <ul className={`dot-navbar-dropdown-menu ${dropdownOpen ? "active" : ""}`}>
            <li>
              <a
                href="https://result.thedotinstitute.in/result"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeDropdown}
              >
                JEE Result
              </a>
            </li>
            <li>
              <a
                href="https://result.thedotinstitute.in/result"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeDropdown}
              >
                NEET Result
              </a>
            </li>
          </ul>
        </li>

        {/* Scholarship Button */}
        <li className="dot-navbar-mobile-btn">
          <a
            href="https://scholarship.thedotinstitute.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="dot-navbar-scholarship-btn"
          >
            Get Scholarship
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NewNavbar;


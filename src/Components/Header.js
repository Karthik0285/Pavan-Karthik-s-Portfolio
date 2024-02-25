import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
  return (
    <div className="nav-bar">
      <div className="name">
        <h2>Pavan Karthik's Portfolio</h2>
      </div>
      <div className="nav-items">
        <ul className="nav">
          <li className="nav-item">
            <ScrollLink to="About-Me" smooth={true} duration={1000} className="nav-link">
              About Me
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="Skills-Heading" smooth={true} duration={1000} className="nav-link">
              Skills
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="Projects-Heading" smooth={true} duration={1000} className="nav-link">
              Projects
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="Contact-Heading" smooth={true} duration={1000} className="nav-link">
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

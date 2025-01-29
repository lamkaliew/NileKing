
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from "react";
import "./Navbar.css"; // Add your CSS for styling

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo and Brand Name */}
      <div className="navbar-brand">
      <span className="logo">NK</span>
      <span className="school-name">NileKing<br/> Web School</span>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li className="dropdown">
          <a href="/courses">Courses</a>
          <ul className="dropdown-menu">
            <li><a href="/python">Python</a></li>
            <li><a href="/javascript">JavaScript</a></li>
            <li><a href="/java">Java</a></li>
            <li><a href="/cpp">C++</a></li>
            <li><a href="/html-css">HTML & CSS</a></li>
            <li><a href="/sql">SQL</a></li>
            <li><a href="/react">React JS</a></li>
            <li><a href="/nodejs">Node.js</a></li>
          </ul>
        </li>
        <li><a href="/tutorials">Tutorials</a></li>
        <li><a href="/practice">Practice</a></li>
        <li className="dropdown">
          <a href="/resources">Resources</a>
          <ul className="dropdown-menu">
            <li><a href="/cheat-sheets">Cheat Sheets</a></li>
            <li><a href="/documentation">Documentation</a></li>
            <li><a href="/books">Recommended Books</a></li>
            <li><a href="/tools">Tools & Software</a></li>
          </ul>
        </li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li>
          <button className="cta-button">Sign In</button>
        </li>
      </ul>
    </nav>
  );
};
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

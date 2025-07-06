// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1>MindEase</h1>
      </Link>
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/support-groups">Support Groups</Link>
        <Link to="/therapists">Therapists</Link>
        <Link to="/mood-quiz">Quiz</Link>
        <Link to="/breathing">Breathing Exercise</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;

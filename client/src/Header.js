// src/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './styles.css';

function Header() {
  const { user, logout } = useContext(AuthContext);

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

        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout} className="logout-btn">Log Out</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
           
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;

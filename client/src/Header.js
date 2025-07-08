// src/Header.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './styles.css';
import { FaUserCircle } from 'react-icons/fa';

function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault(); // Prevent navigation
    logout();
    navigate('/login');
  };

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
            <Link to="/dashboard" title="Profile">
              <FaUserCircle size={20} style={{ verticalAlign: 'middle' }} />
            </Link>
            <Link to="/logout" onClick={handleLogout}>Log out</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;

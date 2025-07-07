// src/Header.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

function Header() {
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUserEmail(null);
    navigate('/');
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
        {userEmail ? (
          <>
            <span className="user-label">Hi, {userEmail.split('@')[0]}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;

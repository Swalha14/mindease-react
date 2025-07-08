// src/Login.js
import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import { AuthContext } from './AuthContext';

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser !== 'undefined') {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.user) {
        login(data.user);
        navigate('/dashboard');
      } else {
        setErrorMsg(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMsg('Server error. Please try again later.');
    }
  };

  return (
    <section className="form-section">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {errorMsg && <p className="error">{errorMsg}</p>}

        <button className="btn" type="submit">Login</button>
      </form>

      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </section>
  );
}

export default Login;

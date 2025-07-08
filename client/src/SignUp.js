// src/SignUp.js
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import { AuthContext } from './AuthContext';

function SignUp() {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser !== 'undefined') {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (data.user) {
        login(data.user); // Save to context
        navigate('/dashboard');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="form-section">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button className="btn" type="submit">Create Account</button>
      </form>

      <p>Already have an account? <Link to="/login">Login</Link></p>
    </section>
  );
}

export default SignUp;

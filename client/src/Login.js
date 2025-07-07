import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './styles.css';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message);

    if (data.message === 'Login successful') {
      login({ email }); // Store user info
      navigate('/'); // Redirect to home
    }
  };

  return (
    <section className="form-section">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />

        <button type="submit" className="btn">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </section>
  );
}

export default Login;

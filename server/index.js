const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mindease'
});

db.connect((err) => {
  if (err) {
    console.error('❌ DB connection failed:', err);
  } else {
    console.log('✅ Connected to MySQL database.');
  }
});

// Sign up route
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  console.log('📥 Signup request:', req.body);

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });

    if (results.length > 0) {
      return res.json({ message: 'User already exists' });
    }

    db.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
      (err, result) => {
        if (err) return res.status(500).json({ message: 'Signup failed' });

        const newUser = {
          id: result.insertId,
          name,
          email
        };
        res.json({ message: 'Signup successful', user: newUser });
      }
    );
  });
});
// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('🔐 Login request:', req.body);

  db.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, results) => {
      if (err) return res.status(500).json({ message: 'Server error' });

      if (results.length > 0) {
        const user = results[0]; //  Send user info back
        res.json({ message: 'Login successful', user });
      } else {
        res.json({ message: 'Invalid credentials' });
      }
    }
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

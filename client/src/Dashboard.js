// src/Dashboard.js
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { AuthContext } from './AuthContext';

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [quizResults, setQuizResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const rawResults = localStorage.getItem('quizResults');
    const rawFavorites = localStorage.getItem('favorites');

    try {
      const storedResults = rawResults && rawResults !== 'undefined' ? JSON.parse(rawResults) : [];
      const storedFavorites = rawFavorites && rawFavorites !== 'undefined' ? JSON.parse(rawFavorites) : [];

      const filteredResults = storedResults.filter(
        result => result.userId === user.id || result.userId === user.email
      );

      setQuizResults(filteredResults);
      setFavorites(storedFavorites);
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
      localStorage.clear();
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <main className="container">
      <section className="dashboard-header">
        <h2>Welcome, {user?.name || 'User'} 👋</h2>
      </section>

      <section className="dashboard-section">
        <h3>Your Quiz Results</h3>
        <div className="card-grid">
          {quizResults.length === 0 ? (
            <p>No results yet. Try taking a quiz!</p>
          ) : (
            quizResults.map((result, index) => {
              const formattedDate = result.timestamp
                ? new Date(result.timestamp).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : 'Date unknown';

              return (
                <div key={index} className="pastel-card">
                  <h4>{result.quiz}</h4>
                  <p>{result.scoreText}</p>
                  <small className="date-text">🕒 Taken on: {formattedDate}</small>
                </div>
              );
            })
          )}
        </div>
      </section>

      <section className="dashboard-section">
        <h3>Your Favorite Articles</h3>
        <div className="card-grid">
          {favorites.length === 0 ? (
            <p>You haven't favorited any articles yet.</p>
          ) : (
            favorites.map((article, index) => (
              <div key={index} className="pastel-card">
                <h4>{article.title}</h4>
                <p>{article.summary || 'You liked this article.'}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;

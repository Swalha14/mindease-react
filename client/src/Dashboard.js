import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';
import './articles.css';
import { AuthContext } from './AuthContext';
import { FaTimes } from 'react-icons/fa'; // React icon for remove

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

    try {
      const rawResults = localStorage.getItem('quizResults');
      const rawFavorites = localStorage.getItem('favorites');

      const storedResults = rawResults && rawResults !== 'undefined' ? JSON.parse(rawResults) : [];
      const storedFavorites = rawFavorites && rawFavorites !== 'undefined' ? JSON.parse(rawFavorites) : [];

      const userId = user.id || user.email;

      const filteredResults = storedResults.filter(result => result.userId === userId);
      const filteredFavorites = storedFavorites.filter(fav => fav.userId === userId);

      setQuizResults(filteredResults);
      setFavorites(filteredFavorites);
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
      localStorage.clear();
      navigate('/login');
    }
  }, [user, navigate]);

  const removeFavorite = (title) => {
    const updated = favorites.filter(fav => fav.title !== title || fav.userId !== (user.id || user.email));
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const removeQuizResult = (timestamp) => {
    const userId = user.id || user.email;
    const updated = quizResults.filter(result => result.timestamp !== timestamp || result.userId !== userId);
    setQuizResults(updated);

    const storedAll = JSON.parse(localStorage.getItem('quizResults')) || [];
    const updatedAll = storedAll.filter(result => result.timestamp !== timestamp || result.userId !== userId);
    localStorage.setItem('quizResults', JSON.stringify(updatedAll));
  };

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
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4>{result.quiz}</h4>
                    <FaTimes
                      onClick={() => removeQuizResult(result.timestamp)}
                      title="Remove"
                      style={{
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        color: '#00796b',
                        marginLeft: '10px'
                      }}
                    />
                  </div>
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
        <div className="articles-list">
          {favorites.length === 0 ? (
            <p>You haven't favorited any articles yet.</p>
          ) : (
            favorites.map((article, index) => (
              <div key={index} className="article-card">
                <img
                  src={
                    article.image
                      ? article.image.startsWith('/')
                        ? article.image
                        : `/${article.image}`
                      : '/images/default.jpg'
                  }
                  alt={article.title}
                />
                <div className="article-content">
                  <h4>{article.title}</h4>
                  <p>{article.summary}</p>
                  <Link to={`/${article.slug}`} state={{ fromArticles: true }}>
                    Read More
                  </Link>
                  <p
                    className="favorite-link"
                    onClick={() => removeFavorite(article.title)}
                  >
                    ❌ Remove from favorites
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;

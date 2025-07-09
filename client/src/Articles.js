
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import './articles.css';
import { AuthContext } from './AuthContext';

function Articles() {
  const { user } = useContext(AuthContext);

  const handleFavorite = (article) => {
    if (!user) {
      alert('You must be logged in to favorite articles.');
      return;
    }

    const userId = user.id || user.email;
    const existing = JSON.parse(localStorage.getItem('favorites')) || [];

    const isAlreadyFavorited = existing.some(
      (fav) => fav.title === article.title && fav.userId === userId
    );

    if (isAlreadyFavorited) {
      alert('Article already in your favorites.');
      return;
    }

    const newFavorite = { ...article, userId };
    localStorage.setItem('favorites', JSON.stringify([...existing, newFavorite]));
    alert('Article added to favorites!');
  };

  return (
    <>
      <main className="articles-list">
        <h2>Featured Articles</h2>

        <div className="article-card">
          <img src="/images/marcel-strauss-fzqxoFJytiE-unsplash.jpg" alt="Understanding Mental Health" />
          <div className="article-content">
            <h3>Understanding Mental Health</h3>
            <p>Learn the basics of mental health and why it's important for everyone.</p>
            <Link to="/mental-health-article" state={{ fromArticles: true }}>Read More</Link>
            <p className="favorite-link" onClick={() =>
              handleFavorite({
                title: "Understanding Mental Health",
                summary: "Learn the basics of mental health and why it's important for everyone.",
                image: "/images/marcel-strauss-fzqxoFJytiE-unsplash.jpg",
                slug: "mental-health-article"
              })
            }>
               ❤️ Add article to your favorites
            </p>
          </div>
        </div>

        <div className="article-card">
          <img src="/images/luis-villasmil-mlVbMbxfWI4-unsplash.jpg" alt="Dealing with Stress" />
          <div className="article-content">
            <h3>Dealing with Stress</h3>
            <p>Practical steps to manage everyday stress and avoid burnout.</p>
            <Link to="/stress-article" state={{ fromArticles: true }}>Read More</Link>
            <p className="favorite-link" onClick={() =>
              handleFavorite({
                title: "Dealing with Stress",
                summary: "Practical steps to manage everyday stress and avoid burnout.",
                image: "/images/luis-villasmil-mlVbMbxfWI4-unsplash.jpg",
                slug: "stress-article"
              })
            }>
              ❤️ Add article to your favorites
            </p>
          </div>
        </div>

        <div className="article-card">
          <img src="/images/david-clode-Yg_sNKOiXvY-unsplash.jpg" alt="Improving Sleep" />
          <div className="article-content">
            <h3>Improving Sleep Quality</h3>
            <p>Explore techniques to improve sleep and overall wellbeing.</p>
            <Link to="/sleep-article" state={{ fromArticles: true }}>Read More</Link>
            <p className="favorite-link" onClick={() =>
              handleFavorite({
                title: "Improving Sleep Quality",
                summary: "Explore techniques to improve sleep and overall wellbeing.",
                image: "/images/david-clode-Yg_sNKOiXvY-unsplash.jpg",
                slug: "sleep-article"
              })
            }>
              ❤️ Add article to your favorites
            </p>
          </div>
        </div>

        <div className="article-card">
          <img src="/images/anthony-tran-vXymirxr5ac-unsplash.jpg" alt="Understanding Depression" />
          <div className="article-content">
            <h3>Understanding Depression</h3>
            <p>Discover symptoms, causes, and treatments of depression.</p>
            <Link to="/depression-article" state={{ fromArticles: true }}>Read More</Link>
            <p className="favorite-link" onClick={() =>
              handleFavorite({
                title: "Understanding Depression",
                summary: "Discover symptoms, causes, and treatments of depression.",
                image: "/images/anthony-tran-vXymirxr5ac-unsplash.jpg",
                slug: "depression-article"
              })
            }>
              ❤️ Add article to your favorites
            </p>
          </div>
        </div>

        <div className="article-card">
          <img src="/images/uday-mittal-bwKtz4YVtmA-unsplash.jpg" alt="Coping with Anxiety" />
          <div className="article-content">
            <h3>Coping with Anxiety</h3>
            <p>How to identify and manage anxiety effectively in daily life.</p>
            <Link to="/anxiety-article" state={{ fromArticles: true }}>Read More</Link>
            <p className="favorite-link" onClick={() =>
              handleFavorite({
                title: "Coping with Anxiety",
                summary: "How to identify and manage anxiety effectively in daily life.",
                image: "/images/uday-mittal-bwKtz4YVtmA-unsplash.jpg",
                slug: "anxiety-article"
              })
            }>
              ❤️ Add article to your favorites
            </p>
          </div>
        </div>

        <div className="article-card">
          <img src="/images/nick-fewings-I3Y1N_d-kHU-unsplash.jpg" alt="Bipolar Disorder Basics" />
          <div className="article-content">
            <h3>Bipolar Disorder Basics</h3>
            <p>What is bipolar disorder and how does it affect mood and behavior?</p>
            <Link to="/bipolar-article" state={{ fromArticles: true }}>Read More</Link>
            <p className="favorite-link" onClick={() =>
              handleFavorite({
                title: "Bipolar Disorder Basics",
                summary: "What is bipolar disorder and how does it affect mood and behavior?",
                image: "/images/nick-fewings-I3Y1N_d-kHU-unsplash.jpg",
                slug: "bipolar-article"
              })
            }>
             ❤️ Add article to your favorites
            </p>
          </div>
        </div>

        <div className="article-card">
          <img src="/images/tamas-pap-XO5qTnr0a50-unsplash.jpg" alt="Understanding Eating Disorders" />
          <div className="article-content">
            <h3>Understanding Eating Disorders</h3>
            <p>Learn about anorexia, bulimia, and binge-eating disorder and ways to help.</p>
            <Link to="/eating-disorder-article" state={{ fromArticles: true }}>Read More</Link>
            <p className="favorite-link" onClick={() =>
              handleFavorite({
                title: "Understanding Eating Disorders",
                summary: "Learn about anorexia, bulimia, and binge-eating disorder and ways to help.",
                image: "/images/tamas-pap-XO5qTnr0a50-unsplash.jpg",
                slug: "eating-disorder-article"
              })
            }>
              ❤️ Add article to your favorites
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Articles;

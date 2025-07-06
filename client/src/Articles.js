import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import './articles.css';

function Articles() {
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
          </div>
        </div>

        <div className="article-card">
          <img src="/images/luis-villasmil-mlVbMbxfWI4-unsplash.jpg" alt="Dealing with Stress" />
          <div className="article-content">
            <h3>Dealing with Stress</h3>
            <p>Practical steps to manage everyday stress and avoid burnout.</p>
            <Link to="/stress-article" state={{ fromArticles: true }}>Read More</Link>
          </div>
        </div>

        <div className="article-card">
          <img src="/images/david-clode-Yg_sNKOiXvY-unsplash.jpg" alt="Improving Sleep" />
          <div className="article-content">
            <h3>Improving Sleep Quality</h3>
            <p>Explore techniques to improve sleep and overall wellbeing.</p>
            <Link to="/sleep-article" state={{ fromArticles: true }}>Read More</Link>
          </div>
        </div>

        <div className="article-card">
          <img src="/images/anthony-tran-vXymirxr5ac-unsplash.jpg" alt="Understanding Depression" />
          <div className="article-content">
            <h3>Understanding Depression</h3>
            <p>Discover symptoms, causes, and treatments of depression.</p>
            <Link to="/depression-article" state={{ fromArticles: true }}>Read More</Link>
          </div>
        </div>

        <div className="article-card">
          <img src="/images/uday-mittal-bwKtz4YVtmA-unsplash.jpg" alt="Coping with Anxiety" />
          <div className="article-content">
            <h3>Coping with Anxiety</h3>
            <p>How to identify and manage anxiety effectively in daily life.</p>
            <Link to="/anxiety-article" state={{ fromArticles: true }}>Read More</Link>
          </div>
        </div>

        <div className="article-card">
          <img src="/images/nick-fewings-I3Y1N_d-kHU-unsplash.jpg" alt="Bipolar Disorder Basics" />
          <div className="article-content">
            <h3>Bipolar Disorder Basics</h3>
            <p>What is bipolar disorder and how does it affect mood and behavior?</p>
            <Link to="/bipolar-article" state={{ fromArticles: true }}>Read More</Link>
          </div>
        </div>

        <div className="article-card">
          <img src="/images/tamas-pap-XO5qTnr0a50-unsplash.jpg" alt="Understanding Eating Disorders" />
          <div className="article-content">
            <h3>Understanding Eating Disorders</h3>
            <p>Learn about anorexia, bulimia, and binge-eating disorder and ways to help.</p>
            <Link to="/eating-disorder-article" state={{ fromArticles: true }}>Read More</Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Articles;

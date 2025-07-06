import React from 'react';
import '../styles.css';

function BipolarArticle() {
  return (
    <main className="article-content" style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2>Bipolar Disorder Basics</h2>
      <p>
        Bipolar disorder is a mental condition that causes extreme mood swings that include emotional highs (mania) and lows (depression).
      </p>

      <h3>Types of Episodes</h3>
      <ul>
        <li>Manic episodes — increased energy, euphoria, risky behavior</li>
        <li>Depressive episodes — sadness, fatigue, hopelessness</li>
      </ul>

      <h3>Treatment</h3>
      <ul>
        <li>Medication and therapy</li>
        <li>Lifestyle changes</li>
        <li>Routine and support systems</li>
      </ul>
    </main>
  );
}

export default BipolarArticle;

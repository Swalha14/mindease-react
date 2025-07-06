import React from 'react';
import '../styles.css';

function AnxietyArticle() {
  return (
    <main className="article-content" style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2>Coping with Anxiety</h2>
      <p>
        Anxiety is a feeling of worry, nervousness, or fear. While it's normal in certain situations, chronic anxiety can interfere with daily life.
      </p>

      <h3>Ways to Cope with Anxiety</h3>
      <ul>
        <li>Practice deep breathing and mindfulness</li>
        <li>Challenge negative thoughts</li>
        <li>Limit caffeine and sugar</li>
        <li>Stay connected to friends and family</li>
        <li>Consider talking to a therapist</li>
      </ul>
    </main>
  );
}

export default AnxietyArticle;

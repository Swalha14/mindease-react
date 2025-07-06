
// SleepArticle.js
import React from 'react';
import '../styles.css';

function SleepArticle() {
  return (
    <main className="article-content" style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2>Improving Sleep Quality</h2>
      <p>Sleep is essential for our physical and mental health. Poor sleep can lead to mood issues, impaired cognition, and a weakened immune system. Yet, many people struggle with sleep problems due to stress, technology use, and irregular schedules.</p>

      <h3>Signs of Poor Sleep</h3>
      <ul>
        <li>Difficulty falling asleep</li>
        <li>Frequent night awakenings</li>
        <li>Daytime fatigue or sleepiness</li>
        <li>Difficulty concentrating or irritability</li>
      </ul>

      <h3>Tips for Better Sleep</h3>
      <ul>
        <li>Maintain a regular sleep schedule</li>
        <li>Avoid screens at least 1 hour before bed</li>
        <li>Keep your sleep environment cool and quiet</li>
        <li>Avoid caffeine late in the day</li>
        <li>Practice relaxation techniques before bed</li>
      </ul>

      <p style={{ marginTop: '2rem', fontWeight: 'bold' }}>
        Learn more at{' '}
        <a href="https://sleepfoundation.org" style={{ color: '#4a7c59', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
          Sleep Foundation
        </a>.
      </p>
    </main>
  );
}

export default SleepArticle;
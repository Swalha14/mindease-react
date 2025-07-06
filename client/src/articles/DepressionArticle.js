
// DepressionArticle.js
import React from 'react';
import '../styles.css';

function DepressionArticle() {
  return (
    <main className="article-content" style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2>Understanding Depression</h2>
      <p>Depression is more than just feeling sad or going through a rough patch. It's a serious mental health condition that affects how a person feels, thinks, and handles daily activities.</p>

      <h3>Symptoms of Depression</h3>
      <ul>
        <li>Persistent sadness or hopelessness</li>
        <li>Loss of interest in hobbies</li>
        <li>Changes in appetite and sleep</li>
        <li>Fatigue or lack of energy</li>
        <li>Feelings of worthlessness or guilt</li>
        <li>Difficulty concentrating or making decisions</li>
        <li>Thoughts of death or suicide</li>
      </ul>

      <h3>Treatment Options</h3>
      <ul>
        <li>Psychotherapy (talk therapy)</li>
        <li>Medication (antidepressants)</li>
        <li>Lifestyle changes (exercise, nutrition)</li>
        <li>Support groups and peer support</li>
      </ul>

      <p style={{ marginTop: '2rem', fontWeight: 'bold' }}>
        If you or someone you know is in crisis, seek help immediately or visit{' '}
        <a href="https://www.befrienders.org" style={{ color: '#4a7c59', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
          Befrienders Worldwide
        </a>.
      </p>
    </main>
  );
}

export default DepressionArticle;

import React from 'react';
import '../styles.css';

function MentalHealthArticle() {
  return (
    <main className="article-content" style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2>Understanding Mental Health</h2>
      <p>Mental health encompasses our emotional, psychological, and social well-being. It affects how we think, feel, and behave in daily life. It also influences how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood through adulthood.</p>

      <h3>Why Mental Health Matters</h3>
      <p>Maintaining good mental health allows individuals to cope with the stresses of life, work productively, and make meaningful contributions to their communities. Poor mental health can lead to emotional distress, decreased functioning, and even physical illness.</p>

      <h3>Common Mental Health Disorders</h3>
      <ul>
        <li>Anxiety Disorders</li>
        <li>Depression</li>
        <li>Bipolar Disorder</li>
        <li>Schizophrenia</li>
        <li>Eating Disorders</li>
      </ul>

      <h3>How to Support Mental Wellbeing</h3>
      <ul>
        <li>Practice self-care regularly</li>
        <li>Build supportive social connections</li>
        <li>Engage in physical activity</li>
        <li>Limit alcohol and avoid drugs</li>
        <li>Get adequate sleep</li>
        <li>Seek therapy or counseling when needed</li>
      </ul>

      <p style={{ marginTop: '2rem', fontWeight: 'bold' }}>
        More information available at{' '}
        <a href="https://www.nimh.nih.gov/health" style={{ color: '#4a7c59', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
          National Institute of Mental Health
        </a>.
      </p>
    </main>
  );
}

export default MentalHealthArticle;

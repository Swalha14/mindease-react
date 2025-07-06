import React from 'react';
import '../styles.css';

function EatingDisorderArticle() {
  return (
    <main className="article-content" style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2>Understanding Eating Disorders</h2>
      <p>
        Eating disorders are serious conditions that affect eating behaviors and related thoughts and emotions. Common types include anorexia, bulimia, and binge-eating disorder.
      </p>

      <h3>Warning Signs</h3>
      <ul>
        <li>Extreme restriction or overeating</li>
        <li>Distorted body image</li>
        <li>Preoccupation with weight and food</li>
        <li>Social withdrawal</li>
      </ul>

      <h3>Support and Recovery</h3>
      <ul>
        <li>Early intervention is key</li>
        <li>Professional therapy and nutritional counseling</li>
        <li>Building a strong support network</li>
      </ul>
    </main>
  );
}

export default EatingDisorderArticle;

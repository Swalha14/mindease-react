import React from 'react';
import '../styles.css';

function StressArticle() {
  return (
    <main className="article-content" style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2>Dealing with Stress</h2>
      <p>
        Stress is the body's natural reaction to any kind of demand or threat. It can be beneficial in short bursts—helping you stay focused and alert.
        However, when stress becomes chronic or overwhelming, it can affect your physical and mental well-being.
      </p>

      <h3>Common Causes of Stress</h3>
      <ul>
        <li>Work pressure, deadlines, and burnout</li>
        <li>Family responsibilities or conflicts</li>
        <li>Financial struggles or job insecurity</li>
        <li>Health challenges, chronic illness, or injury</li>
        <li>Major life changes (e.g. moving, marriage, loss)</li>
      </ul>

      <h3>Physical and Emotional Signs of Stress</h3>
      <ul>
        <li>Headaches, fatigue, and muscle tension</li>
        <li>Difficulty sleeping or sleeping too much</li>
        <li>Irritability, anxiety, or restlessness</li>
        <li>Changes in appetite or digestive problems</li>
        <li>Withdrawal from social activities</li>
      </ul>

      <h3>Healthy Ways to Manage Stress</h3>
      <ul>
        <li>Take regular breaks and ensure enough rest each day</li>
        <li>Practice mindfulness, meditation, or guided breathing exercises</li>
        <li>Engage in physical activities like walking, yoga, or sports</li>
        <li>Talk to someone you trust—a friend, family member, or therapist</li>
        <li>Stay organized with to-do lists and set realistic goals</li>
        <li>Limit caffeine, alcohol, and avoid substance abuse</li>
      </ul>

      <h3>When to Seek Help</h3>
      <p>
        If stress starts interfering with your ability to live a normal life, consider reaching out to a professional.
        Therapists, counselors, or mental health specialists can provide tools and support tailored to your needs.
      </p>

      <p style={{ marginTop: '2rem', fontWeight: 'bold' }}>
        Explore more stress relief resources at{' '}
        <a
          href="https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/stress"
          style={{ color: '#4a7c59', textDecoration: 'underline' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mental Health Foundation – Stress
        </a>.
      </p>
    </main>
  );
}

export default StressArticle;

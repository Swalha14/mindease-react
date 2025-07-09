
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import './mood-quiz.css';

function MoodQuiz() {
  return (
    <main className="quiz-landing container">
      <h2>Check In With Yourself</h2>
      <p>
        Mental health matters—and being aware of how you're doing emotionally is a key part of taking care of yourself.
        Our quizzes are designed to help you reflect on your current mood, thought patterns, sleep, stress levels, and self-esteem.
        Each quiz takes only a few minutes and can help guide your next steps.
      </p>

      <div className="quiz-cards">
        <div className="quiz-card">
          <h3>🧠 General Mental Health Quiz</h3>
          <p>Get a snapshot of your overall emotional wellbeing.</p>
          <Link to="/general-quiz" className="quiz-link">Take Quiz</Link>
        </div>
        <div className="quiz-card">
          <h3>😟 Anxiety Quiz</h3>
          <p>See if you're experiencing symptoms of anxiety.</p>
          <Link to="/anxiety-quiz" className="quiz-link">Take Quiz</Link>
        </div>
        <div className="quiz-card">
          <h3>😔 Depression Quiz</h3>
          <p>Evaluate common signs of depression.</p>
          <Link to="/depression-quiz" className="quiz-link">Take Quiz</Link>
        </div>
        <div className="quiz-card">
          <h3>🌀 Stress Quiz</h3>
          <p>Understand your current stress levels and triggers.</p>
          <Link to="/stress-quiz" className="quiz-link">Take Quiz</Link>
        </div>
        <div className="quiz-card">
          <h3>🌙 Sleep Wellness Quiz</h3>
          <p>Check if your sleep patterns could be impacting your mood.</p>
          <Link to="/sleep-quiz" className="quiz-link">Take Quiz</Link>
        </div>
        <div className="quiz-card">
          <h3>🌸 Self-Esteem Quiz</h3>
          <p>Assess your self-image and confidence levels.</p>
          <Link to="/selfesteem-quiz" className="quiz-link">Take Quiz</Link>
        </div>
      </div>

      <div className="disclaimer">
        <p>
          <strong>Disclaimer:</strong> The quizzes provided on MindEase are for informational and self-reflection purposes only.
          They are not intended to replace a clinical diagnosis or professional medical advice. If you're concerned about your mental health,
          we recommend speaking with a qualified therapist or mental health professional for a proper evaluation and support.
        </p>
      </div>
    </main>
  );
}

export default MoodQuiz;

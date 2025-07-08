// src/pages/StressQuiz.js
import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import './quiz.css';

function StressQuiz() {
  const [result, setResult] = useState('');
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = 0;

    for (let i = 1; i <= 5; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected) total += parseInt(selected.value);
    }

    let scoreText = '';

    if (total <= 7) {
      scoreText = "You appear to have low stress levels. Keep up the healthy balance!";
    } else if (total <= 11) {
      scoreText = "You may be experiencing moderate stress. Try some relaxation techniques or hobbies.";
    } else {
      scoreText = "You might be under high stress. It could help to speak with someone or take breaks.";
    }

    setResult(scoreText);

    if (user) {
      const prevResults = JSON.parse(localStorage.getItem('quizResults')) || [];
      const newResult = {
        quiz: "Stress",
        scoreText,
        userId: user.id || user.email,
        timestamp: Date.now()
      };
      localStorage.setItem('quizResults', JSON.stringify([...prevResults, newResult]));
    }
  };

  return (
    <main className="container">
      <h2>😫 Stress Quiz</h2>
      <p>Answer the questions below to understand your current stress level.</p>

      <form onSubmit={handleSubmit}>
        <div className="quiz-question">
          <p>1. How often do you feel tense or on edge?</p>
          <label><input type="radio" name="q1" value="3" /> Often</label>
          <label><input type="radio" name="q1" value="2" /> Sometimes</label>
          <label><input type="radio" name="q1" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>2. How well are you sleeping lately?</p>
          <label><input type="radio" name="q2" value="1" /> Well</label>
          <label><input type="radio" name="q2" value="2" /> So-so</label>
          <label><input type="radio" name="q2" value="3" /> Poorly</label>
        </div>

        <div className="quiz-question">
          <p>3. How often do you feel irritated or annoyed?</p>
          <label><input type="radio" name="q3" value="3" /> Frequently</label>
          <label><input type="radio" name="q3" value="2" /> Occasionally</label>
          <label><input type="radio" name="q3" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>4. How often do you feel overwhelmed by tasks?</p>
          <label><input type="radio" name="q4" value="3" /> Often</label>
          <label><input type="radio" name="q4" value="2" /> Sometimes</label>
          <label><input type="radio" name="q4" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>5. How often do you take breaks or time for yourself?</p>
          <label><input type="radio" name="q5" value="1" /> Regularly</label>
          <label><input type="radio" name="q5" value="2" /> Occasionally</label>
          <label><input type="radio" name="q5" value="3" /> Almost never</label>
        </div>

        <button type="submit" className="quiz-link">Submit</button>
      </form>

      {result && <div id="result">{result}</div>}

      <div className="disclaimer">
        <p><strong>Note:</strong> This quiz is not a diagnosis. It's a self-check to help you reflect on your stress level.</p>
      </div>
    </main>
  );
}

export default StressQuiz;

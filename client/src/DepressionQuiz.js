// src/pages/DepressionQuiz.js
import React, { useState, useContext } from 'react';
import './quiz.css';
import { AuthContext } from './AuthContext';

function DepressionQuiz() {
  const [result, setResult] = useState('');
  const { user } = useContext(AuthContext); // ✅ Access logged-in user

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = 0;

    for (let i = 1; i <= 5; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected) total += parseInt(selected.value);
    }

    let scoreText = '';

    if (total <= 7) {
      scoreText = "You may be showing few or no signs of depression. Continue practicing healthy habits and self-care.";
    } else if (total <= 11) {
      scoreText = "You might be experiencing some symptoms of depression. Consider reaching out to a support group or therapist.";
    } else {
      scoreText = "Your responses suggest you may be dealing with significant symptoms of depression. We encourage you to speak to a mental health professional.";
    }

    setResult(scoreText);

    if (user) {
      const prevResults = JSON.parse(localStorage.getItem('quizResults')) || [];
      const newResult = {
        quiz: "Depression",
        scoreText,
        userId: user.id || user.email,
        timestamp: Date.now()
      };

      localStorage.setItem('quizResults', JSON.stringify([...prevResults, newResult]));
    }
  };

  return (
    <main className="container">
      <h2>😔 Depression Quiz</h2>
      <p>Answer the questions below to assess if you're experiencing symptoms of depression.</p>

      <form onSubmit={handleSubmit}>
        <div className="quiz-question">
          <p>1. How often do you feel down, depressed, or hopeless?</p>
          <label><input type="radio" name="q1" value="3" /> Nearly every day</label>
          <label><input type="radio" name="q1" value="2" /> Several days</label>
          <label><input type="radio" name="q1" value="1" /> Rarely or not at all</label>
        </div>

        <div className="quiz-question">
          <p>2. Have you lost interest or pleasure in activities you usually enjoy?</p>
          <label><input type="radio" name="q2" value="3" /> Often</label>
          <label><input type="radio" name="q2" value="2" /> Sometimes</label>
          <label><input type="radio" name="q2" value="1" /> No</label>
        </div>

        <div className="quiz-question">
          <p>3. How is your energy level throughout the day?</p>
          <label><input type="radio" name="q3" value="3" /> Very low</label>
          <label><input type="radio" name="q3" value="2" /> Somewhat low</label>
          <label><input type="radio" name="q3" value="1" /> Normal</label>
        </div>

        <div className="quiz-question">
          <p>4. Do you struggle with feelings of worthlessness or guilt?</p>
          <label><input type="radio" name="q4" value="3" /> Frequently</label>
          <label><input type="radio" name="q4" value="2" /> Occasionally</label>
          <label><input type="radio" name="q4" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>5. Have your sleeping or eating habits changed significantly?</p>
          <label><input type="radio" name="q5" value="3" /> Yes, a lot</label>
          <label><input type="radio" name="q5" value="2" /> Slightly</label>
          <label><input type="radio" name="q5" value="1" /> No</label>
        </div>

        <button type="submit" className="quiz-link">Submit</button>
      </form>

      {result && <div id="result">{result}</div>}

      <div className="disclaimer">
        <p><strong>Note:</strong> This quiz is not a clinical diagnosis. It’s intended to help you reflect and understand more about your emotional state. If you’re feeling persistently unwell, please talk to a qualified therapist.</p>
      </div>
    </main>
  );
}

export default DepressionQuiz;

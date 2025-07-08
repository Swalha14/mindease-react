// src/pages/AnxietyQuiz.js
import React, { useState, useContext } from 'react';
import './quiz.css';
import { AuthContext } from './AuthContext';

function AnxietyQuiz() {
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
      scoreText = "You're showing low signs of anxiety. Continue maintaining healthy coping strategies.";
    } else if (total <= 11) {
      scoreText = "You may be experiencing moderate anxiety. It might help to monitor your stress levels and self-care habits.";
    } else {
      scoreText = "You may be experiencing high anxiety. Consider talking to a mental health professional.";
    }

    setResult(scoreText);

    // ✅ Save result if user is logged in
    if (user) {
      const prevResults = JSON.parse(localStorage.getItem('quizResults')) || [];
      const newResult = {
        quiz: "Anxiety",
        scoreText,
        userId: user.id || user.email,
        timestamp: Date.now(),
      };

      localStorage.setItem('quizResults', JSON.stringify([...prevResults, newResult]));
    }
  };

  return (
    <main className="container">
      <h2>😟 Anxiety Quiz</h2>
      <p>Answer the questions below to check for signs of anxiety.</p>

      <form onSubmit={handleSubmit}>
        <div className="quiz-question">
          <p>1. How often do you feel nervous or on edge?</p>
          <label><input type="radio" name="q1" value="3" /> Often</label>
          <label><input type="radio" name="q1" value="2" /> Sometimes</label>
          <label><input type="radio" name="q1" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>2. Do you experience rapid heartbeat or shortness of breath?</p>
          <label><input type="radio" name="q2" value="3" /> Frequently</label>
          <label><input type="radio" name="q2" value="2" /> Occasionally</label>
          <label><input type="radio" name="q2" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>3. How often do you have trouble concentrating?</p>
          <label><input type="radio" name="q3" value="3" /> Often</label>
          <label><input type="radio" name="q3" value="2" /> Sometimes</label>
          <label><input type="radio" name="q3" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>4. Do you find it hard to relax?</p>
          <label><input type="radio" name="q4" value="3" /> Very hard</label>
          <label><input type="radio" name="q4" value="2" /> Sometimes</label>
          <label><input type="radio" name="q4" value="1" /> No</label>
        </div>

        <div className="quiz-question">
          <p>5. How often do you avoid social situations because of fear or worry?</p>
          <label><input type="radio" name="q5" value="3" /> Frequently</label>
          <label><input type="radio" name="q5" value="2" /> Occasionally</label>
          <label><input type="radio" name="q5" value="1" /> Never</label>
        </div>

        <button type="submit" className="quiz-link">Submit</button>
      </form>

      {result && <div id="result">{result}</div>}

      <div className="disclaimer">
        <p><strong>Note:</strong> This quiz is not a clinical diagnosis. It’s intended to help you reflect on your emotional state.
          If you’re feeling persistently anxious, please seek support from a mental health professional.
        </p>
      </div>
    </main>
  );
}

export default AnxietyQuiz;

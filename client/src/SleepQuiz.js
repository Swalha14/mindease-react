
import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import './quiz.css';

function SleepQuiz() {
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
      scoreText = "Your sleep habits seem healthy. Keep it up!";
    } else if (total <= 11) {
      scoreText = "You might be experiencing some sleep disturbances. Try to maintain a consistent routine.";
    } else {
      scoreText = "Your responses suggest significant sleep issues. Consider seeking guidance from a professional.";
    }

    setResult(scoreText);

    if (user) {
      const prevResults = JSON.parse(localStorage.getItem('quizResults')) || [];
      const newResult = {
        quiz: "Sleep",
        scoreText,
        userId: user.id || user.email,
        timestamp: Date.now()
      };
      localStorage.setItem('quizResults', JSON.stringify([...prevResults, newResult]));
    }
  };

  return (
    <main className="container">
      <h2>💤 Sleep Quiz</h2>
      <p>Evaluate the quality of your sleep and see if any improvements are needed.</p>

      <form onSubmit={handleSubmit}>
        <div className="quiz-question">
          <p>1. How many hours do you sleep per night?</p>
          <label><input type="radio" name="q1" value="3" /> Less than 5</label>
          <label><input type="radio" name="q1" value="2" /> 5–6 hours</label>
          <label><input type="radio" name="q1" value="1" /> 7+ hours</label>
        </div>

        <div className="quiz-question">
          <p>2. How often do you wake up feeling refreshed?</p>
          <label><input type="radio" name="q2" value="1" /> Always</label>
          <label><input type="radio" name="q2" value="2" /> Sometimes</label>
          <label><input type="radio" name="q2" value="3" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>3. Do you struggle to fall asleep?</p>
          <label><input type="radio" name="q3" value="3" /> Often</label>
          <label><input type="radio" name="q3" value="2" /> Sometimes</label>
          <label><input type="radio" name="q3" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>4. Do you wake up multiple times at night?</p>
          <label><input type="radio" name="q4" value="3" /> Frequently</label>
          <label><input type="radio" name="q4" value="2" /> Occasionally</label>
          <label><input type="radio" name="q4" value="1" /> Never</label>
        </div>

        <div className="quiz-question">
          <p>5. Do you use devices (phone, laptop) right before bed?</p>
          <label><input type="radio" name="q5" value="3" /> Always</label>
          <label><input type="radio" name="q5" value="2" /> Sometimes</label>
          <label><input type="radio" name="q5" value="1" /> No</label>
        </div>

        <button type="submit" className="quiz-link">Submit</button>
      </form>

      {result && <div id="result">{result}</div>}

      <div className="disclaimer">
        <p><strong>Note:</strong> This quiz is not a substitute for medical advice. If you have ongoing sleep issues, consult a professional.</p>
      </div>
    </main>
  );
}

export default SleepQuiz;

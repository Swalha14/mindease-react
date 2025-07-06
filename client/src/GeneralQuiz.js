// src/pages/GeneralQuiz.js
import React, { useState } from 'react';
import './quiz.css';

function GeneralQuiz() {
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = 0;

    for (let i = 1; i <= 5; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected) total += parseInt(selected.value);
    }

    if (total <= 7) {
      setResult("Your responses suggest good emotional balance. Keep maintaining your mental wellbeing!");
    } else if (total <= 11) {
      setResult("You might be experiencing mild emotional stress. Consider checking in with your habits and support system.");
    } else {
      setResult("Your responses suggest you could benefit from speaking with a mental health professional.");
    }
  };

  return (
    <main className="container">
      <h2>🧠 General Mental Health Quiz</h2>
      <p>Answer the following questions honestly to get a general sense of your mental wellbeing.</p>

      <form onSubmit={handleSubmit}>
        <div className="quiz-question">
          <p>1. How often do you feel overwhelmed by your responsibilities?</p>
          <label><input type="radio" name="q1" value="3" /> Often</label>
          <label><input type="radio" name="q1" value="2" /> Sometimes</label>
          <label><input type="radio" name="q1" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>2. How would you describe your sleep quality recently?</p>
          <label><input type="radio" name="q2" value="1" /> Good</label>
          <label><input type="radio" name="q2" value="2" /> Fair</label>
          <label><input type="radio" name="q2" value="3" /> Poor</label>
        </div>

        <div className="quiz-question">
          <p>3. Do you find joy in things you used to enjoy?</p>
          <label><input type="radio" name="q3" value="1" /> Yes</label>
          <label><input type="radio" name="q3" value="2" /> Not sure</label>
          <label><input type="radio" name="q3" value="3" /> No</label>
        </div>

        <div className="quiz-question">
          <p>4. How often do you feel anxious or worried for no clear reason?</p>
          <label><input type="radio" name="q4" value="3" /> Frequently</label>
          <label><input type="radio" name="q4" value="2" /> Occasionally</label>
          <label><input type="radio" name="q4" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>5. How connected do you feel to people around you?</p>
          <label><input type="radio" name="q5" value="1" /> Very connected</label>
          <label><input type="radio" name="q5" value="2" /> Somewhat connected</label>
          <label><input type="radio" name="q5" value="3" /> Isolated</label>
        </div>

        <button type="submit" className="quiz-link">Submit</button>
      </form>

      {result && <div id="result">{result}</div>}

      <div className="disclaimer">
        <p>
          <strong>Note:</strong> This quiz is not a clinical diagnosis. It’s intended to help you reflect and understand more about your emotional state.
          If you’re feeling persistently unwell, please talk to a qualified therapist.
        </p>
      </div>
    </main>
  );
}

export default GeneralQuiz;

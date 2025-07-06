import React, { useState } from 'react';
import './quiz.css';

function AnxietyQuiz() {
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = 0;
    for (let i = 1; i <= 5; i++) {
      const answer = document.querySelector(`input[name="q${i}"]:checked`);
      if (answer) total += parseInt(answer.value);
    }

    if (total <= 7) {
      setResult("You're showing low signs of anxiety. Continue maintaining healthy coping strategies.");
    } else if (total <= 11) {
      setResult("You may be experiencing moderate anxiety. It might help to monitor your stress levels and self-care habits.");
    } else {
      setResult("You may be experiencing high anxiety. Consider talking to a mental health professional.");
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

      {result && (
        <div id="result">{result}</div>
      )}

      <div className="disclaimer">
        <p>
          <strong>Note:</strong> This quiz is not a clinical diagnosis. It’s intended to help you reflect on your emotional state.
          If you’re feeling persistently anxious, please seek support from a mental health professional.
        </p>
      </div>
    </main>
  );
}

export default AnxietyQuiz;

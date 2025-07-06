import React, { useState } from 'react';
import './quiz.css';

function StressQuiz() {
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = 0;
    for (let i = 1; i <= 5; i++) {
      const answer = document.querySelector(`input[name="q${i}"]:checked`);
      if (answer) total += parseInt(answer.value);
    }

    if (total <= 7) {
      setResult("You appear to be managing stress well. Keep up the good habits!");
    } else if (total <= 11) {
      setResult("You're experiencing moderate stress. Try relaxation techniques and regular breaks.");
    } else {
      setResult("You're highly stressed. Consider seeking professional help or making lifestyle changes.");
    }
  };

  return (
    <main className="container">
      <h2>🌀 Stress Quiz</h2>
      <p>Reflect on your recent stress levels with the questions below.</p>

      <form onSubmit={handleSubmit}>
        <div className="quiz-question">
          <p>1. How often do you feel tense or uptight?</p>
          <label><input type="radio" name="q1" value="3" /> Often</label>
          <label><input type="radio" name="q1" value="2" /> Sometimes</label>
          <label><input type="radio" name="q1" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>2. Do you struggle to fall or stay asleep due to worry?</p>
          <label><input type="radio" name="q2" value="3" /> Frequently</label>
          <label><input type="radio" name="q2" value="2" /> Occasionally</label>
          <label><input type="radio" name="q2" value="1" /> No</label>
        </div>

        <div className="quiz-question">
          <p>3. How often do you feel overwhelmed?</p>
          <label><input type="radio" name="q3" value="3" /> Regularly</label>
          <label><input type="radio" name="q3" value="2" /> Sometimes</label>
          <label><input type="radio" name="q3" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>4. Do you find it hard to relax or unwind?</p>
          <label><input type="radio" name="q4" value="3" /> Yes</label>
          <label><input type="radio" name="q4" value="2" /> Occasionally</label>
          <label><input type="radio" name="q4" value="1" /> No</label>
        </div>

        <div className="quiz-question">
          <p>5. Do you notice physical signs of stress (e.g., headaches, muscle tension)?</p>
          <label><input type="radio" name="q5" value="3" /> Frequently</label>
          <label><input type="radio" name="q5" value="2" /> Sometimes</label>
          <label><input type="radio" name="q5" value="1" /> Rarely</label>
        </div>

        <button type="submit" className="quiz-link">Submit</button>
      </form>

      {result && <div id="result">{result}</div>}

      <div className="disclaimer">
        <p><strong>Note:</strong> This quiz is for self-reflection and not a clinical diagnosis. Please reach out to a professional if needed.</p>
      </div>
    </main>
  );
}

export default StressQuiz;

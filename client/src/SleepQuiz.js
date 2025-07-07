import React, { useState } from 'react';
import './quiz.css';

function SleepQuiz() {
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = 0;
    for (let i = 1; i <= 5; i++) {
      const answer = document.querySelector(`input[name="q${i}"]:checked`);
      if (answer) total += parseInt(answer.value);
    }

    if (total <= 7) {
      setResult("Your sleep habits seem healthy. Keep prioritizing rest!");
    } else if (total <= 11) {
      setResult("You may have some minor sleep issues. Try adjusting your sleep routine.");
    } else {
      setResult("Your responses indicate potential sleep disturbances. Consider seeking professional advice.");
    }
  };

  return (
    <main className="container">
      <h2>🌙 Sleep Wellness Quiz</h2>
      <p>Reflect on your sleep habits over the past few weeks.</p>

      <form onSubmit={handleSubmit}>
        <div className="quiz-question">
          <p>1. Do you get at least 7 hours of sleep each night?</p>
          <label><input type="radio" name="q1" value="1" /> Yes</label>
          <label><input type="radio" name="q1" value="2" /> Sometimes</label>
          <label><input type="radio" name="q1" value="3" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>2. How often do you wake up feeling rested?</p>
          <label><input type="radio" name="q2" value="1" /> Most days</label>
          <label><input type="radio" name="q2" value="2" /> Occasionally</label>
          <label><input type="radio" name="q2" value="3" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>3. Do you have trouble falling or staying asleep?</p>
          <label><input type="radio" name="q3" value="3" /> Frequently</label>
          <label><input type="radio" name="q3" value="2" /> Sometimes</label>
          <label><input type="radio" name="q3" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>4. Do you use screens (phone/laptop) before bed?</p>
          <label><input type="radio" name="q4" value="3" /> Every night</label>
          <label><input type="radio" name="q4" value="2" /> Occasionally</label>
          <label><input type="radio" name="q4" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>5. Do you wake up during the night?</p>
          <label><input type="radio" name="q5" value="3" /> Frequently</label>
          <label><input type="radio" name="q5" value="2" /> Sometimes</label>
          <label><input type="radio" name="q5" value="1" /> No</label>
        </div>

        <button type="submit" className="quiz-link">Submit</button>
      </form>

      {result && <div id="result">{result}</div>}

      <div className="disclaimer">
        <p><strong>Note:</strong> This quiz is for reflection purposes. If sleep issues persist, consult a healthcare provider.</p>
      </div>
    </main>
  );
}

export default SleepQuiz;
import React, { useState } from 'react';
import './quiz.css';

function SelfEsteemQuiz() {
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = 0;
    for (let i = 1; i <= 5; i++) {
      const answer = document.querySelector(`input[name="q${i}"]:checked`);
      if (answer) total += parseInt(answer.value);
    }

    if (total <= 7) {
      setResult("You appear to have a strong sense of self-worth. Keep nurturing it!");
    } else if (total <= 11) {
      setResult("You may be experiencing occasional self-doubt. Try practicing self-affirmation.");
    } else {
      setResult("Your responses suggest low self-esteem. Consider talking to a counselor or therapist.");
    }
  };

  return (
    <main className="container">
      <h2>🌸 Self-Esteem Quiz</h2>
      <p>Answer these questions to reflect on your current self-esteem.</p>

      <form onSubmit={handleSubmit}>
        <div className="quiz-question">
          <p>1. How often do you criticize yourself?</p>
          <label><input type="radio" name="q1" value="3" /> Frequently</label>
          <label><input type="radio" name="q1" value="2" /> Sometimes</label>
          <label><input type="radio" name="q1" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>2. Do you feel confident in your abilities?</p>
          <label><input type="radio" name="q2" value="1" /> Yes</label>
          <label><input type="radio" name="q2" value="2" /> Occasionally</label>
          <label><input type="radio" name="q2" value="3" /> No</label>
        </div>

        <div className="quiz-question">
          <p>3. How do you handle compliments?</p>
          <label><input type="radio" name="q3" value="1" /> Accept them gratefully</label>
          <label><input type="radio" name="q3" value="2" /> Feel awkward</label>
          <label><input type="radio" name="q3" value="3" /> Reject them</label>
        </div>

        <div className="quiz-question">
          <p>4. Do you compare yourself to others often?</p>
          <label><input type="radio" name="q4" value="3" /> Yes</label>
          <label><input type="radio" name="q4" value="2" /> Sometimes</label>
          <label><input type="radio" name="q4" value="1" /> Rarely</label>
        </div>

        <div className="quiz-question">
          <p>5. How do you view your self-worth?</p>
          <label><input type="radio" name="q5" value="1" /> Positively</label>
          <label><input type="radio" name="q5" value="2" /> Uncertain</label>
          <label><input type="radio" name="q5" value="3" /> Negatively</label>
        </div>

        <button type="submit" className="quiz-link">Submit</button>
      </form>

      {result && <div id="result">{result}</div>}

      <div className="disclaimer">
        <p><strong>Note:</strong> This quiz is for reflection and not a diagnosis. If self-esteem challenges persist, professional support can help.</p>
      </div>
    </main>
  );
}

export default SelfEsteemQuiz;

// src/DepressionQuiz.js
import React, { useState } from 'react';
import './quiz.css';

function DepressionQuiz() {
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = 0;

    for (let i = 1; i <= 5; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected) total += parseInt(selected.value);
    }

    if (total <= 7) {
      setResult("You may be showing few or no signs of depression. Continue practicing healthy habits and self-care.");
    } else if (total <= 11) {
      setResult("You might be experiencing some symptoms of depression. Consider reaching out to a support group or therapist.");
    } else {
      setResult("Your responses suggest you may be dealing with significant symptoms of depression. We encourage you to speak to a mental health professional.");
    }
  };

  return (
    <main className="container">
      <h2>😔 Depression Quiz</h2>
      <p>Answer the questions below to get a better sense of whether you might be experiencing symptoms of depression.</p>

      <form onSubmit={handleSubmit}>
        {[
          {
            q: "1. How often do you feel down, depressed, or hopeless?",
            name: "q1",
            options: ["Nearly every day", "Several days", "Rarely or not at all"],
            values: [3, 2, 1]
          },
          {
            q: "2. Have you lost interest or pleasure in activities you usually enjoy?",
            name: "q2",
            options: ["Often", "Sometimes", "No"],
            values: [3, 2, 1]
          },
          {
            q: "3. How is your energy level throughout the day?",
            name: "q3",
            options: ["Very low", "Somewhat low", "Normal"],
            values: [3, 2, 1]
          },
          {
            q: "4. Do you struggle with feelings of worthlessness or guilt?",
            name: "q4",
            options: ["Frequently", "Occasionally", "Rarely"],
            values: [3, 2, 1]
          },
          {
            q: "5. Have your sleeping or eating habits changed significantly?",
            name: "q5",
            options: ["Yes, a lot", "Slightly", "No"],
            values: [3, 2, 1]
          }
        ].map((question, index) => (
          <div className="quiz-question" key={index}>
            <p>{question.q}</p>
            {question.options.map((option, i) => (
              <label key={i}>
                <input type="radio" name={question.name} value={question.values[i]} />
                {option}
              </label>
            ))}
          </div>
        ))}

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

export default DepressionQuiz;

import React, { useState, useRef } from 'react';

function BreathingExercise() {
  const [isRunning, setIsRunning] = useState(false);
  const [duration, setDuration] = useState(4);
  const [phase, setPhase] = useState(0); // 0 = inhale, 1 = hold, 2 = exhale, 3 = hold
  const intervalRef = useRef(null);
  const instructionRef = useRef(null);
  const circleRef = useRef(null);

  const instructions = ["Breathe in slowly...", "Hold your breath...", "Breathe out slowly...", "Hold..."];
  const colors = ["#4a7c59", "#76b88a", "#a8d5ba", "#76b88a"];
  const scales = ["scale(1.5)", "scale(1.5)", "scale(1)", "scale(1)"];

  const updateInstruction = (nextPhase) => {
    if (instructionRef.current && circleRef.current) {
      instructionRef.current.textContent = instructions[nextPhase];
      circleRef.current.style.transform = scales[nextPhase];
      circleRef.current.style.backgroundColor = colors[nextPhase];
    }
  };

  const startBreathing = () => {
    setPhase(0);
    updateInstruction(0);
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setPhase((prev) => {
        const next = (prev + 1) % 4;
        updateInstruction(next);
        return next;
      });
    }, duration * 1000);
  };

  const stopBreathing = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    if (instructionRef.current && circleRef.current) {
      instructionRef.current.textContent = "Exercise stopped. Select duration and press Start.";
      circleRef.current.style.transform = "scale(1)";
      circleRef.current.style.backgroundColor = "#a8d5ba";
    }
  };

  return (
    <main style={{ padding: '40px 10%', textAlign: 'center', minHeight: '100vh' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto 30px', textAlign: 'left' }}>
        <h1 style={{ fontSize: '2rem', color: '#00796b', marginBottom: '10px' }}>Take a Moment to Breathe</h1>
        <p style={{ fontSize: '1.1rem', color: '#2c3e50' }}>
          Breathing exercises can reduce stress, clear your mind, and help you feel more grounded. Just a few minutes of
          deep breathing can slow your heart rate and lower blood pressure.
        </p>
      </div>

      <h2 style={{ color: '#004d40' }}>Breathing Exercise</h2>
      <p ref={instructionRef} style={{ fontSize: '1.2rem', color: '#4a7c59', minHeight: '1.5em', marginBottom: '20px' }}>
        Select a duration and press Start.
      </p>

      <div
        ref={circleRef}
        style={{
          width: '200px',
          height: '200px',
          margin: '40px auto',
          border: '5px solid #004d40',
          borderRadius: '50%',
          backgroundColor: '#a8d5ba',
          transition: 'transform 4s ease, background-color 4s ease'
        }}
      ></div>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <label htmlFor="durationSelect" style={{ fontWeight: 600, color: '#2c4a32', marginTop: '10px' }}>
          Duration per phase (seconds):
        </label>
        <select
          id="durationSelect"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          disabled={isRunning}
          style={{
            padding: '5px 10px',
            borderRadius: '5px',
            border: '1.5px solid #4a7c59',
            fontSize: '1rem',
            color: '#2c4a32',
          }}
        >
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>

        <button
          onClick={startBreathing}
          disabled={isRunning}
          style={{
            backgroundColor: '#4a7c59',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            fontSize: '1rem',
            borderRadius: '8px',
            cursor: isRunning ? 'not-allowed' : 'pointer',
          }}
        >
          Start Exercise
        </button>

        <button
          onClick={stopBreathing}
          disabled={!isRunning}
          style={{
            backgroundColor: isRunning ? '#6b4a59' : '#a0b99a',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            fontSize: '1rem',
            borderRadius: '8px',
            cursor: isRunning ? 'pointer' : 'not-allowed',
          }}
        >
          Stop Exercise
        </button>
      </div>
    </main>
  );
}

export default BreathingExercise;

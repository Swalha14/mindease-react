import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

function BreathingExercise() {
  const [phase, setPhase] = useState(0);
  const [running, setRunning] = useState(false);
  const [duration, setDuration] = useState(4);
  const instructionRef = useRef(null);
  const circleRef = useRef(null);
  const intervalRef = useRef(null);

  const updateInstruction = (currentPhase) => {
    if (!circleRef.current || !instructionRef.current) return;

    const circle = circleRef.current;
    const instruction = instructionRef.current;

    switch (currentPhase) {
      case 0:
        instruction.textContent = 'Breathe in slowly...';
        circle.style.transform = 'scale(1.5)';
        circle.style.backgroundColor = '#4a7c59';
        break;
      case 1:
        instruction.textContent = 'Hold your breath...';
        circle.style.backgroundColor = '#76b88a';
        break;
      case 2:
        instruction.textContent = 'Breathe out slowly...';
        circle.style.transform = 'scale(1)';
        circle.style.backgroundColor = '#a8d5ba';
        break;
      case 3:
        instruction.textContent = 'Hold...';
        circle.style.backgroundColor = '#76b88a';
        break;
      default:
        break;
    }
  };

  const startExercise = () => {
    setRunning(true);
    setPhase(0);
    updateInstruction(0);
    intervalRef.current = setInterval(() => {
      setPhase((prev) => {
        const next = (prev + 1) % 4;
        updateInstruction(next);
        return next;
      });
    }, duration * 1000);
  };

  const stopExercise = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    if (instructionRef.current && circleRef.current) {
      instructionRef.current.textContent = 'Exercise stopped. Select duration and press Start.';
      circleRef.current.style.transform = 'scale(1)';
      circleRef.current.style.backgroundColor = '#a8d5ba';
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // cleanup on unmount
  }, []);

  return (
    <main style={{ padding: '40px 10%', textAlign: 'center' }}>
      <h2 style={{ color: '#004d40' }}>Breathing Exercise</h2>
      <p className="instructions" ref={instructionRef}>Select a duration and press Start.</p>
      <div
        ref={circleRef}
        className="circle"
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

      <div className="controls" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <label htmlFor="durationSelect" style={{ fontWeight: '600', color: '#2c4a32' }}>
          Duration per phase (seconds):
        </label>
        <select
          id="durationSelect"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          disabled={running}
          style={{
            padding: '5px 10px',
            borderRadius: '5px',
            border: '1.5px solid #4a7c59',
            fontSize: '1rem',
            color: '#2c4a32'
          }}
        >
          {[3, 4, 5, 6].map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>

        <button
          onClick={startExercise}
          disabled={running}
          style={{
            backgroundColor: '#4a7c59',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            fontSize: '1rem',
            borderRadius: '8px',
            cursor: running ? 'not-allowed' : 'pointer',
            minWidth: '120px'
          }}
        >
          Start
        </button>

        <button
          onClick={stopExercise}
          disabled={!running}
          style={{
            backgroundColor: running ? '#4a7c59' : '#a0b99a',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            fontSize: '1rem',
            borderRadius: '8px',
            cursor: running ? 'pointer' : 'not-allowed',
            minWidth: '120px'
          }}
        >
          Stop
        </button>
      </div>
    </main>
  );
}

export default BreathingExercise;

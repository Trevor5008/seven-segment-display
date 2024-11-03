import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables for A, B, C, D
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [C, setC] = useState(false);
  const [D, setD] = useState(false);

  const calcTotal = () => {
    let sum = 0
    sum += A ? 8 : 0
    sum += B ? 4 : 0
    sum += C ? 2 : 0
    sum += D ? 1 : 0
    return sum
  }

  // Helper function to compute each segment based on the current state
  const computeSegments = () => {
    return {
      a: !((!A && !B && !C && D) || (!A && B && !C && !D)),
      b: !((!A && B && C && !D) || (!A && B && !C && D)),
      c: !(!A && !B && C && !D),
      d: !((!A && !B && !C && D) || (!A && B && !C && !D)
        || (!A && B && C && D)),
      e: !((!A && !B && !C && D) || (!A && !B && C && D) 
        || (!A && B && !C && !D) || (!A && B && !C && D)
        || (!A && B && C && D) || (A && !B && !C && D)),
      f: !((!A && !B && !C && D) || (!A && !B && C && !D)
        || (!A && !B && C && D) || (!A && B && C && D)),
      g: !((!A && !B && !C && !D) || (!A && !B && !C && D)
        || (!A && B && C && D))
    };
  };

  // Compute segments based on current inputs
  const segments = computeSegments();
  const total = calcTotal()

  return (
    <div className="App">
      <h1>Seven Segment Display</h1>
      <h2>Total: {total}</h2>
      <div id="controls">
        <button onClick={() => setA((prev) => !prev)}>A: {A ? '1' : '0'}</button>
        <button onClick={() => setB((prev) => !prev)}>B: {B ? '1' : '0'}</button>
        <button onClick={() => setC((prev) => !prev)}>C: {C ? '1' : '0'}</button>
        <button onClick={() => setD((prev) => !prev)}>D: {D ? '1' : '0'}</button>
      </div>
      <div id="digit">
        {/* Each segment will conditionally illuminate based on the computed segment values */}
        <div id="a" className={`segment horizontal ${segments.a ? 'on' : ''}`} />
        <div id="b" className={`segment vertical ${segments.b ? 'on' : ''}`} />
        <div id="c" className={`segment vertical ${segments.c ? 'on' : ''}`} />
        <div id="d" className={`segment horizontal ${segments.d ? 'on' : ''}`} />
        <div id="e" className={`segment vertical ${segments.e ? 'on' : ''}`} />
        <div id="f" className={`segment vertical ${segments.f ? 'on' : ''}`} />
        <div id="g" className={`segment horizontal ${segments.g ? 'on' : ''}`} />
      </div>
    </div>
  );
}

export default App;

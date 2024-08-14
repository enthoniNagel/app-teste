import './App.css';
import React from 'react';

const Bemvindo = (props) => {
  return (
    <>
      <h2>Bem-vindos(a)</h2>
    </>
  );
}

const Quadrado = () => {
  return (
    <div className="quadrado">
      <p><strong>Enthoni:</strong> Front-End Developer</p>
      <p><strong>Matheus:</strong> Full-Stack Developer</p>
      <p><strong>Diego:</strong> Full-Stack Developer</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Bemvindo />
      <Quadrado />
    </div>
  );
}

export default App;

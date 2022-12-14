import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [energy, setEnergy] = React.useState(true);
  const [velocity, setVelocity] = React.useState('fast');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} data-energy={energy} data-velocity={velocity} className="App-logo" alt="logo" />
        <p>
          Ventilador
        </p>
          <button onClick={() => setEnergy(!energy)}>POWER</button>
          <button onClick={() => setVelocity("slow")}>SLOW</button>
          <button onClick={() => setVelocity("medium")}>MEDIUM</button>
          <button onClick={() => setVelocity("fast")}>FAST</button>
      </header>
    </div>
  );
}

export default App;

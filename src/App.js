import React, { useState } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  function formatTime(time) {
    const hours = (time / 3600)|0;
    const minutes = ((time % 3600) / 60)|0;
    const seconds = time % 60|0;
  
    const Hours = hours < 10 ? '0' + hours : '' + hours;
    const Minutes = minutes < 10 ? '0' + minutes : '' + minutes;
    const Seconds = seconds < 10 ? '0' + seconds : '' + seconds;
  
    
    return `${Hours}:${Minutes}:${Seconds}`;
  }
  
  const startTime = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTime = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTime = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setSeconds(0);
  };

  return (
    <div className='container'>
      <div className='sub-container'>
        <label className='timer'>{formatTime(seconds)}</label>
        <br /><br />
        <div className='buttons'>
          <button className='start' onClick={startTime}>Start</button>
          <button className='stop' onClick={stopTime}>Stop</button>
          <button className='reset' onClick={resetTime}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

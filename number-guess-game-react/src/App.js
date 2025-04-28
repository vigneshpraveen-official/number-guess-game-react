import './App.css';
import React, { useState } from 'react';
import Result from './Result';
const randomNumber = Math.floor(Math.random() * 10) + 1;

function App() {

  const [term, setTerm] = useState('');
  const handleChange = (e) => {
    setTerm(e.target.value)
  }

  return (
    <>
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src="/guess-game-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      {/* App content */}
      <div className="container">
        <div className='head'>
          <label>Guess the Number Between 1 to 10 </label>
        </div>
        <input id='term' type='text' name='term' onChange={handleChange} />
        <Result randomNumber={randomNumber} term={term} />
      </div>
    </>
  );
}

export default App;

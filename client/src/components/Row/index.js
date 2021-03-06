import React from 'react';
import './style.css';

const Row = ({ guess, currentGuess }) => {

  if (guess) {
    return (
      <div className='row past'>
        {guess.map((letter, i) => (
          <div key={i} className={letter.color}>{letter.key}</div>
        ))}
      </div>
    )
  }

  if (currentGuess) {

    let letters = currentGuess.split('');

    return (
      <div className='row current'>
        {letters.map((letter, i) => (
          <div key={i} className='filled'>{letter}</div>
        ))}
        {[...Array(5 - letters.length)].map((value, i) => (
          <div key={i}></div>
        ))}
      </div>
    )
  }

  return (
    <div className='row'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Row;

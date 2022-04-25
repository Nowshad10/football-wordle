import React, { useEffect } from 'react';
import useWordle from '../hooks/useWordle';

const Wordle = ({ solution }) => {

  const { currentGuess, handleKeyUp } = useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    // cleanup function, prevent numerous events
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp])
  return (
    <div>Current Guess: {currentGuess}</div>
  )
}

export default Wordle;
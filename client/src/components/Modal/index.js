import React from 'react';
import './style.css';

const Modal = ({ isCorrect, turn, solution }) => {
  
  const handlePlayAgain = () => {
      window.location = window.location
  }

  return (
    <div className='modal'>
        { isCorrect && (
            <div>
                <h1>You Win!</h1>
                <p className='solution'>{solution}</p>
                <p>You found the solution in {turn} guesses!</p>
                <button onClick={handlePlayAgain}>Play Again?</button>
            </div>
        )}

        { !isCorrect && (
            <div>
                <h1>Oops, unlucky!</h1>
                <p className='solution'>{solution}</p>
                <p>Better luck next time...</p>
                <button onClick={handlePlayAgain}>Play Again?</button>
            </div>
        )}
    </div>
  )
};

export default Modal;

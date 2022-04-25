import { useState } from 'react';

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {
        console.log(`Formatting the guess - ${currentGuess}`)
    }
    // add a new guess to the guesses state
    // update the isCorrect state if guess is correct
    // add one to the turn state
    const addNewGuess = () => {

    }
    // handle keyup event & track current guess
    // if user presses enter, add the new guess
    const handleKeyUp = ({ key }) => {

        if (key === 'Enter') {
            // only add guess if turn < 5
            if (turn > 5) {
                console.log('All turns used up!')
                return
            };
            // do not allow duplicate guesses
            if (history.includes(currentGuess)) {
                console.log('Already tried this word')
                return
            };

            if (currentGuess.length !==5) {
                console.log('Word must be 5 characters long')
                return
            };

            formatGuess()
        }
        if (key === 'Backspace') {
            setCurrentGuess((prevState) => {
                return prevState.slice(0, -1)
            })
            return
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prevState) => {
                    return prevState + key
                });
            };
        };
    };
    return (
        { turn, currentGuess, guesses, isCorrect, handleKeyUp }
    );
}
 
export default useWordle;

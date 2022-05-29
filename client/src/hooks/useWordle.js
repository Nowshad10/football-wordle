import { useState } from 'react';

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0);
    const [guesses, setGuesses] = useState([...Array(6)]); // creates array of length 6
    const [currentGuess, setCurrentGuess] = useState('');
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});

    const formatGuess = () => {
        let solutionArray = [...solution];
        let formattedGuess = [...currentGuess].map((letter) => {
            return {key: letter, color: 'grey'}
        });
        // find any correct green letters
        formattedGuess.forEach((letter, i) => {
            if (solutionArray[i] === letter.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            };
        });

        // find any yellow letters
        formattedGuess.forEach((letter, i) => {
            if (solutionArray.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[i].color = 'yellow';
                solutionArray[solutionArray.indexOf(letter.key)] = null;
            };
        });
        return formattedGuess;
    }
    // add a new guess to the guesses state
    // update the isCorrect state if guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {
        if( currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        });
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess];
        });
        setTurn((prevTurn) => {
            return prevTurn + 1
        });
        setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys}
            formattedGuess.forEach((l) => {
                const currentColor = newKeys[l.key]
                if (l.color === 'green') {
                    newKeys[l.key] = 'green'
                    return
                }
                if (l.color === 'yellow' && currentColor !== 'green') {
                    newKeys[l.key] = 'yellow'
                    return
                }
                if (l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
                    newKeys[l.key] = 'grey'
                    return
                }
            })
            return newKeys
        })
        setCurrentGuess('');
    };

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

            const formatted = formatGuess();
            addNewGuess(formatted);
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
        { turn, currentGuess, guesses, isCorrect, handleKeyUp, usedKeys }
    );
}
 
export default useWordle;

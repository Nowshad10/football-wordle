import { useState, useEffect } from 'react';
import Wordle from './components/Wordle';

function App() {

  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(response => response.json())
      .then(data => {
        const randomSolution = data[Math.floor(Math.random()*data.length)];
        setSolution(randomSolution.player);
      })
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordle (Football Edition)</h1>
      { solution && <Wordle solution={solution}/>}
    </div>
  );
}

export default App;

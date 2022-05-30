import { useState, useEffect } from 'react';
import Wordle from './components/Wordle';

function App() {

  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/random')
      .then(response => response.json())
      .then(data => {
        setSolution(data[0].name);
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

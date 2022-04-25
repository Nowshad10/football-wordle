import { useState, useEffect } from 'react';

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
      { solution && <div>Solution is: {solution.toUpperCase()}</div>}
    </div>
  );
}

export default App;

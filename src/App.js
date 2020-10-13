import React, { useState, useEffect} from 'react';
/* eslint-disable react-hooks/exhaustive-deps */

function App() {
  const [ words, getWord ] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [game, setGame] = useState(false);
  console.log(game);

  function handleChange(event) {
    const { value } = event.target;
    getWord({value});
  }

  function countWords(words) {
    const wordCount = words.value ? words.value.trim().split(" ") : words;

    const wordValue = wordCount ? wordCount.filter(word => word !== "").length : 0;
    console.log(wordValue);
    return wordValue;
  }

  function gameStart() {
    setGame(!game);
  }

  useEffect(() => {
    if (game && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    } else {
      setGame(false);
    }
  }, [game, timeRemaining])

  return (
    <div className="App">
      <h1>Type Mama!!</h1>
      <form>
        <textarea value={words.value} onChange={handleChange} />
      </form>
      <h4>Time remaining: {timeRemaining}</h4>
      <button type="submit" onClick={() => gameStart()}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;

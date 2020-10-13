import React, { useState, useEffect} from 'react';
/* eslint-disable react-hooks/exhaustive-deps */

function App() {
  const STARTING_TIME = 5;

  const [words, getWord] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [game, setGame] = useState(false);
  const [wordCount, setWordCount] = useState(0)

  function handleChange(event) {
    const { value } = event.target;
    getWord(value);
  }

  function countWords(words) {
    const wordCount = words.trim().split(" ");

    const wordValue = wordCount.filter(word => word !== "").length;
    console.log(wordValue);
    return wordValue;
  }

  function startGame() {
    setGame(true);
    setTimeRemaining(STARTING_TIME)
    getWord("")
    setWordCount(0)
  }

  function endGame() {
    setGame(false);
    setWordCount(countWords(words))
  }

  useEffect(() => {
    if (game && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    } else {
      endGame();
    }
  }, [game, timeRemaining])

  return (
    <div className="App">
      <h1>Type Mama!!</h1>
      <form>
        <textarea
          value={words}
          disabled={!game}
          onChange={handleChange}
        />
      </form>
      <h4>Time remaining: {timeRemaining}</h4>
      <button
        type="submit"
        disabled={game}
        onClick={() => startGame()}
      >
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;

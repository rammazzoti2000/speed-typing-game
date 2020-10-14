import React, { useState, useEffect, useRef} from 'react';
/* eslint-disable react-hooks/exhaustive-deps */

function App() {
  const STARTING_TIME = 5;

  const [words, getWord] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [game, setGame] = useState(false);
  const [wordCount, setWordCount] = useState(0)
  const inputRef = useRef(null);

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
    setTimeRemaining(STARTING_TIME);
    getWord("");
    setWordCount(0);
    inputRef.current.disabled = false;
    inputRef.current.focus();
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
          ref={inputRef}
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

import React, { useState, useEffect} from 'react';
/* eslint-disable react-hooks/exhaustive-deps */

function App() {
  const [ words, getWord ] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(10);
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

  function gameReset() {
    setGame(true);
    setTimeRemaining(10)
    getWord("")
    setWordCount(0)
  }

  useEffect(() => {
    if (game && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    } else {
      setGame(false);
      setWordCount(countWords(words))
    }
  }, [game, timeRemaining])

  return (
    <div className="App">
      <h1>Type Mama!!</h1>
      <form>
        <textarea
          value={words}
          onChange={handleChange}
        />
      </form>
      <h4>Time remaining: {timeRemaining}</h4>
      <button
        type="submit"
        onClick={() => gameReset()}
      >
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;

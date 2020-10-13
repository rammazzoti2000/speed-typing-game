import React, { useState, useEffect } from 'react';

function App() {
  const [ words, getWord ] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(10)
  console.log(words);

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

  useEffect(() => {
    setTimeout(() => {
      setTimeRemaining(prevTime => prevTime - 1)
    }, 1000)
  }, [timeRemaining])

  return (
    <div className="App">
      <h1>Type Mama!!</h1>
      <form>
        <textarea value={words.value} onChange={handleChange} />
      </form>
      <h4>Time remaining: {timeRemaining}</h4>
      <button type="submit" onClick={() => countWords(words)}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  const [ words, getWord ] = useState("");
  console.log(words);

  function handleChange(event) {
      const { value } = event.target;
      getWord({
        value
      });
  }

  function countWords() {
    const wordCount = words.value.trim().split(" ").length;
    console.log(wordCount);
    return wordCount;
  }

  return (
    <div className="App">
      <h1>Type Mama!!</h1>
      <form>
        <textarea value={words.value} onChange={handleChange} />
      </form>
      <h4>Time remaining: ???</h4>
      <button type="submit" onClick={() => countWords(words)}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;

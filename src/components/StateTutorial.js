import React, { useState } from "react";

function StateTutorial() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Hello World");

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      {counter}
      <button onClick={decrement}>Decrement</button>
      {/* <button onClick={() => setCounter(counter + 1)}>Increment</button> */}
      <br></br>
      <input
        placeholder="Enter Something!!!"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      {inputValue}
    </div>
  );
}

export default StateTutorial;

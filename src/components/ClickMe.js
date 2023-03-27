import React, { useState } from "react";

const ClickMe = () => {
  const [textInput, setTextInput] = useState("");
  const [count, setCount] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const wordLength = textInput.length;
    setCount(count + wordLength);
    setTextInput("");
  }

  function handleTextUpdate(event) {
    setTextInput(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={textInput} onChange={handleTextUpdate}></input>
        <button> Click me! </button>
        <p> {count} </p>
      </form>
    </div>
  );
};

export default ClickMe;

import React from "react";
import { useState } from 'react';

function Add() {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(text);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Enter a todo"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Add;

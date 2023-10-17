import React from "react";
import axios from "axios";
import { useState } from 'react';

function Add() {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("/api/add", { text: text })
    window.location.reload();
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
      <input type="submit"
      class="btn btn-primary" 
      />
    </form>
  );
}

export default Add;

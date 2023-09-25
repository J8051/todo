import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Todo from "./Components/Todo";
import Add from "./Components/Add";

function App() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    axios.get("/api").then((response) => {
      settodos(response.data);
    });
  }, []);

  return (
    <>
      <h1>My Todo List</h1>
      {todos.map((todo) => (
        <Todo key={todo.id} item={todo.name} value={todo.id} />
      ))}
      <Add/>
    </>
  );
}

export default App;

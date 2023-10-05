import "../todo.css";
import TodoItem from "./TodoItem";
import axios from "axios";
import { React, useState,useEffect } from "react";


function TodoList() {
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
      <TodoItem key={todo.id} item={todo.name} value={todo.id} />
    ))}
    </>
  );
}

export default TodoList;

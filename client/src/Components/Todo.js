import "../todo.css";
import axios from "axios";
import { React, useState } from "react";
import Edit from "./Edit";

function Todo({ item, value }) {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  function handleClick(event) {
    event.preventDefault();
    const id = event.target.value;
    axios.delete(`/api/${id}`);
    window.location.reload();
  }

  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {editing ? <Edit /> : item}
          {editing ? (
            <button onClick={handleEditing}>Save</button>
          ) : (
            <>
              <button className="edit" onClick={handleEditing}>
                Edit
              </button>
              <button
                onClick={handleClick}
                value={value}
                type="button"
                className="btn-close"
                aria-label="Close"
              ></button>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Todo;

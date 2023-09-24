import "../todo.css"
import axios from "axios";
import React from "react";

function Todo({item, value}) {

  function handleClick(event) {
    event.preventDefault();
    const id = event.target.value; 
    axios.delete(`/api/${id}`)
    window.location.reload();
  }

  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {item}
          <button
            onClick={handleClick}
            value={value}
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </li>
      </ul>
    </div>
  );
}

export default Todo;

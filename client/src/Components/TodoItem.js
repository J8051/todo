import "../todo.css";
import axios from "axios";
import { React, useState } from "react";
import Edit from "./Edit";

function TodoItem({ item, value }) {
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
    <>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {editing ? (
              <Edit value={value} setEditing={setEditing} />
            ) : (
              <>
                {item}
                <button className="edit" onClick={handleEditing}>
                  Edit
                </button>
              </>
            )}

            <button
              onClick={handleClick}
              value={value}
              type="button"
              className="close"
              aria-label="Close"
            > Delete
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TodoItem;

import "../todo.css";
import axios from "axios";
import { React, useState } from "react";

function TodoItem({ item, value }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState("");

  const handleEditing = () => {
    setEditing(true);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const id = value;
    axios.put(`/api/edit`, { text: text, id: id });
    window.location.reload();
    setEditing(false);
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
              <form>
                <label>
                  <input
                    placeholder="Edit todo"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </label>
              </form>
            ) : (
              item
            )}
            {editing ? (
              <>
                <button onClick={handleSave}>Save</button>
              </>
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
    </>
  );
}

export default TodoItem;

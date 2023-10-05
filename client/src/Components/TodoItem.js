import "../todo.css";
import axios from "axios";
import { React, useState } from "react";
import Edit from "./Edit";

function TodoItem({item,value}) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState("");

  const handleEditing = () => {
    setEditing(true);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const id = value;
    const text = event.target.innerHTML;
    axios.put(`/api/edit`, { text: text, id: id });
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
          {editing ? <Edit /> : item}
            {editing ? (
              <>
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
                <button onClick={handleEditing}>Save</button>
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

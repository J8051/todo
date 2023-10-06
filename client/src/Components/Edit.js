import "../todo.css";
import axios from "axios";
import { React, useState } from "react";

function Edit({value, setEditing }) {
  const [text, setText] = useState("");

  const handleSave = (event) => {
    event.preventDefault();
    const id = value;
    axios.put(`/api/edit`, { text: text, id: id });
    window.location.reload();
    setEditing(false);
  };

  return (
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
      <button onClick={handleSave}>Save</button>
    </>
  );
}

export default Edit;

import React from "react";
import axios from "axios";
import { useState } from "react";

function Edit() {
  const [text, setText] = useState("");

  function handleSave(event) {
    event.preventDefault();
    // axios.put("/api/edit", { text: text })
    // window.location.reload();
  }

  return (
          <form onSubmit={handleSave}>
            <label>
              <input
                placeholder="Edit todo"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </label>
          </form>
  );
}

export default Edit;

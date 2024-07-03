import React, { useState } from "react";

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleNoteIput(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
    console.log(note);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleNoteIput}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleNoteIput}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.text}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

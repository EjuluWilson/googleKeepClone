import React, { useState } from "react";

function CreateArea(props) {
  //initailise note state
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //capture note
  function handleNoteIput(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote, //add previous note
        [name]: value,
      };
    });
    console.log(note);
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.addNote(note);
        }}
      >
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

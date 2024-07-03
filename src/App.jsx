import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreatArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    if (note.title === "" || note.content === "") {
      return;
    }
    setNotes((existingNotes) => [...existingNotes, note]);
  }

  function deleteNote(noteIndex){
    setNotes((existingNotes) =>existingNotes.filter((note, index)=>index!==noteIndex));
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote} />;
      })}
      <Footer></Footer>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreatArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((existingNotes) => [...existingNotes, note]);
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer></Footer>
    </div>
  );
}

export default App;

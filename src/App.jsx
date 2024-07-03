import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";
import CreateArea from "./components/CreatArea"

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((item) => (
        <Note key={item.key} title={item.title} content={item.content} />
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;

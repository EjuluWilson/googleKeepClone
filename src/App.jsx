import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((item) => (
        <Note key={item.key} title={item.title} content={item.content} />
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;

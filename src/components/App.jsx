import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prev) => {
      return [...prev, note];
    });
  }

  return (
    <div>
      <Header></Header>
      <CreateArea onAdd={addNote} />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;

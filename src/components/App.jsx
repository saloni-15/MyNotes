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

  function deleteNode(id) {
    setNotes((prev) => {
      return prev.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header></Header>
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNode}
        />
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;

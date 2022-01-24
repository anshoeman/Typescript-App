import React from "react";
import { useState } from "react";
import { Note } from "./interfaces/CreateNote";
import "./App.css";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title:"Random Title",
      text: "Some Random Text",
      color: "#fff",
      date: new Date().toString(),
    },
  ]);
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;

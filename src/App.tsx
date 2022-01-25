import React from "react";
import { useState } from "react";
import { Note } from "./interfaces/CreateNote";
import Header from "./components/Header";
import { Container, Row, Col } from "react-bootstrap";
import CreateNotes from "./components/CreateNotes";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Random Title",
      text: "Some Random Text",
      color: "#fff",
      date: new Date().toString(),
    },
  ]);
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col>
            <Notes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

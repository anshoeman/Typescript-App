import * as React from "react";
import { Note } from "../interfaces/CreateNote";
import SingleNoteCard from "../components/NoteCard";
interface INotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const Notes: React.FunctionComponent<INotesProps> = ({ notes, setNotes }) => {
  const HandleDelete = (id: string) => {
    console.log(id);
    setNotes(notes.filter((note) => note.id !== id));
  }; //Function Can Also Be Written as FC
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return (
        <SingleNoteCard key={note.id} note={note} handleDelete={HandleDelete} />
      );
    });
  };
  return (
    <>
      <div>{renderNotes()}</div>
    </>
  );
};

export default Notes;

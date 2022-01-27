import * as React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Note } from "../interfaces/CreateNote";
interface ICreateNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
  notes,
  setNotes,
}) => {
  const [error, setError] = React.useState<String>("");
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLInputElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All Feilds Are Mandatory");
    }

    setError("");
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLInputElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);
  };
  return (
    <>
      <h2 className="mt-4">Create Notes</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="mt-2" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title For The Note"
            ref={titleRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter The Note"
            ref={textRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            ref={colorRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;

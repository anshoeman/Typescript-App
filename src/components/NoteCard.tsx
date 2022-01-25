import * as React from 'react';
import { Note } from "../interfaces/CreateNote"
import {Card} from 'react-bootstrap'
interface ISingleNoteCardProps {
    note:Note,
    handleDelete:(id:string)=>void
}

const SingleNoteCard: React.FunctionComponent<ISingleNoteCardProps> = ({note,handleDelete}) => {
   
    const {id,title,text,color,date} = note
  return (
    <div style={{marginTop:"23px"}}>
        <Card style={{backgroundColor:color}}>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{text}</Card.Subtitle>
    <Card.Text>
      {date}
    </Card.Text>
   <button className="btn btn-danger" onClick={()=>handleDelete(note.id)}>Delete</button>
  </Card.Body>
</Card>
    </div>
  );
};

export default SingleNoteCard;

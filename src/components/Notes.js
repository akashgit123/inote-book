import React,{useContext} from 'react';
import NoteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';

export default function Notes() {
    const noteContext = useContext(NoteContext);
  const {notes,setNotes} = noteContext;
  return (
    <div className='container'>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {
          notes.map((note)=>{
            return <NoteItem noteItem={note} key={note._id} />
          })
        }
      </div>
    </div>
  )
}

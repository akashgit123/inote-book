import React, { useContext,useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

export default function Notes() {
  const noteContext = useContext(NoteContext);
  const { notes, fetchNotes } = noteContext;
  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line 
  }, [])
  
  return (
    <>
      <AddNote />
      <div className="container">
        <div className="row my-3">
          <h2>Your Notes</h2>
          {notes.map((note) => {
            return <NoteItem noteItem={note} key={note._id} />;
          })}
        </div>
      </div>
    </>
  );
}

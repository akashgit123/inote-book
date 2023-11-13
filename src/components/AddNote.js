import React, { useContext ,useState } from "react";
import NoteContext from "../context/notes/noteContext";

export default function AddNote() {
  const noteContext = useContext(NoteContext);
  const {addNote } = noteContext;
  const [note,setNote] = useState({title:"",description:"",tag:"general"});

  const handleOnClick =(e) =>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
  }
  const handleOnChange = (e) =>{
    setNote({...note,[e.target.name]:e.target.value})
  }

  return (
    <div className="container my-3">
      <h1>Add your note</h1>
      <div className="mb-3">
        <label htmlFor="title" className="form-label my-2">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Enter title of your note here"
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Note description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows="3"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label my-2">
          Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="tag"
          name="tag"
          onChange={handleOnChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleOnClick}>
        Add Note
      </button>
    </div>
  );
}

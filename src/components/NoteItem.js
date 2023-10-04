import React from "react";

export default function NoteItem(props) {
  const { noteItem } = props;
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{noteItem.title}</h5>
          <p className="card-text">
          {noteItem.description} 
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Home() {
  return (
    <div>
      <div className="container my-3">
        <h1>Add your note</h1>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label my-2">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter title of your note here"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Note description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>

      <div className="container my-3">
        <h2>Your Notes</h2>
      </div>
    </div>
  );
}

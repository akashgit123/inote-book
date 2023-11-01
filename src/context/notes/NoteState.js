import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const host = "http://localhost:7000";
    const notesInitial =[];

    const [notes,setNotes] = useState(notesInitial);

    // Fetch all notes
    const fetchNotes = async() =>{
        // call fetch note api
        const response = await fetch(`${host}/api/notes/fetchAllNotes`,{
            method:"GET",
            headers :{
                'Content-Type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXRoaXNoIiwiZW1haWwiOiJhdGhpc2hAZ21haWwuY29tIiwiaWQiOiI2NTBjNGYyZjc1YmRmMGYzOGRjNTdmN2IiLCJpYXQiOjE2OTUzMDcxNTZ9.W3mU19TMloArzbZcMfIiUOe0GUQU1fxm0RGEGwuVWY8'
            },
        });
        const data = await response.json();
        // console.log(data);
        setNotes(data);
    }

    // Add a note
    const addNote = async(title,description,tag) =>{
        // call add note api
        const response = await fetch(`${host}/api/notes/addNote`,{
            method:"POST",
            headers :{
                'Content-Type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXRoaXNoIiwiZW1haWwiOiJhdGhpc2hAZ21haWwuY29tIiwiaWQiOiI2NTBjNGYyZjc1YmRmMGYzOGRjNTdmN2IiLCJpYXQiOjE2OTUzMDcxNTZ9.W3mU19TMloArzbZcMfIiUOe0GUQU1fxm0RGEGwuVWY8'
            },
            body:JSON.stringify({title,description,tag})
        });

        const note = {
            "_id": "651c232d486a036dd19a0bf8",
            "user": "650c4f2f75bdf0f38dc57f7b",
            "title": title,
            "description": description,
            "tag": tag,
            "__v": 0
        }
        setNotes(notes.concat(note));
    }

    // Delete a note
    const deleteNote = (id) =>{
        console.log("Deleting note...."+id);
        const newNotes = notes.filter((note)=>{
            return note._id !== id ;
        })
        setNotes(newNotes);
    }

    //Edit a note
    const editNote = async(id,title,description,tag) =>{
        // Api call
        const response = await fetch(`${host}/api/notes/updateNote/${id}`,{
            method:"POST",
            headers :{
                'Content-Type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXRoaXNoIiwiZW1haWwiOiJhdGhpc2hAZ21haWwuY29tIiwiaWQiOiI2NTBjNGYyZjc1YmRmMGYzOGRjNTdmN2IiLCJpYXQiOjE2OTUzMDcxNTZ9.W3mU19TMloArzbZcMfIiUOe0GUQU1fxm0RGEGwuVWY8'
            },
            body:JSON.stringify({title,description,tag})
        });
        const json =  response.json();

        // Logic to edit in client side
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
            
        }
    }

    return(
        <NoteContext.Provider  value={{notes,addNote,deleteNote,editNote,fetchNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
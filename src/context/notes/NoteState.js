import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const notesInitial =[
        {
            "_id": "650c5f5b4cceef2f33d82bf9",
            "user": "650c4f2f75bdf0f38dc57f7b",
            "title": "My hobbies",
            "description": "My hobbies are playing cricket , reading etc...",
            "tag": "general",
            "__v": 0
        },
        {
            "_id": "651c232d486a036dd19a0bf8",
            "user": "650c4f2f75bdf0f38dc57f7b",
            "title": "My hobbies",
            "description": "My hobbies are playing cricket , reading etc...",
            "tag": "general",
            "__v": 0
        },
        {
            "_id": "651c2331486a036dd19a0bfa",
            "user": "650c4f2f75bdf0f38dc57f7b",
            "title": "My hobbies",
            "description": "My hobbies are playing cricket , reading etc...",
            "tag": "general",
            "__v": 0
        },
        {
            "_id": "651c2333486a036dd19a0bfc",
            "user": "650c4f2f75bdf0f38dc57f7b",
            "title": "My hobbies",
            "description": "My hobbies are playing cricket , reading etc...",
            "tag": "general",
            "__v": 0
        }
    ]

    const [notes,setNotes] = useState(notesInitial);
    return(
        <NoteContext.Provider  value={{notes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
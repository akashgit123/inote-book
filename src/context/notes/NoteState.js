import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const sample ={
        "name" : "Akash",
        "age" : 21
    }
    const [state,setState] = useState(sample);
    const update = () =>{
        setTimeout(() => {
            setState({
                name :"Suresh",
                age:25
            })
        }, 3000);
    }
    return(
        <NoteContext.Provider  value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
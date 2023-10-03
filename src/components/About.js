import { useEffect, useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const About = () =>{
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line  
  }, [])
  
  return (
    <div>
      <h1>About Page</h1>
      <h2>This is {a.state.name}   and his age is {a.state.age} </h2>
    </div>
  )
}

export default About ;

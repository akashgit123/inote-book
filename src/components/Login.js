import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';

export default function Login(props) {
    const [credentials,setCredentials] = useState({email:" ",password:""});
    const host = "http://localhost:7000";
    let navigate = useNavigate();
    
    const handleOnSubmit = async(e) =>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`,{
            method:"POST",
            headers :{
                'Content-Type':'application/json',
            },
            body : JSON.stringify({email:credentials.email,password:credentials.password})
        });
        const token = await response.json();
        console.log(token)
        if(token){
            //set the auth token
            localStorage.setItem('token',token);
            navigate('/');
            props.showAlert("Logged in Successfully","success");
        }
        else{
          props.showAlert("Invalid credentilas .. Try agian","danger");
        }
    }

    const handleOnChange =(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit} >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleOnChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleOnChange}
            value={credentials.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

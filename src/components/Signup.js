import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: " ",
    password: "",
    cpassword: "",
  });
  const host = "http://localhost:7000";
  let navigate = useNavigate();

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const token = await response.json();
    console.log(token);
    if (token) {
      //set the auth token
      localStorage.setItem("token", token);
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleOnChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleOnChange}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Create Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleOnChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={handleOnChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

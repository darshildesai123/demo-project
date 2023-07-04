import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      navigate("/Home");
    }, 5000);
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label>Username:</label>
        <input type="text" placeholder="Enter Username"></input>
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Enter password"></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;

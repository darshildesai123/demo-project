import React from "react";
import { Form, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

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
      <Form>
        {/* <InputField type="text" placeholder="Enter Username"></InputField>
        <InputField type="password" placeholder="Enter password"></InputField> */}
        {/* <button type="submit">Submit</button> */}
      </Form>
    </>
  );
}
export default Login;

// const Form = styled.form`
//   width:40%;
//   margin:0 auto;
  
// `


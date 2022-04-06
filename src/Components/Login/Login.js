import React, { useState } from "react";
import { Button, Form } from "react-bootstrap-v5";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import useFirebase from "../hook/useFirebase";
import MenuBar from "../MenuBar/MenuBar";

const Login = () => {
  const { signInUsingGoogle } = useFirebase();
  const [loginData,setLoginData]=useState({});
  const handleOnChange=e=>{
    const field=e.target.name;
    const value=e.target.value;
    console.log(field,value);
  }
  const handleLoginSubmit=e=>{
    e.preventDefault();

  }
  return (
    <div>
      <MenuBar></MenuBar>
      <Banner></Banner>
      <h1>sign In</h1>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group
          className="mb-3"
          style={{ marginRight: "485px", marginLeft: "485px" }}
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" onChange={handleOnChange} name="name" placeholder="Enter email" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          style={{
            marginRight: "485px",
            marginLeft: "485px",
            borderRadius: "10px",
          }}
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={handleOnChange} name="password" placeholder="Password" />
        </Form.Group>
        <Button style={{ width: "300px" }} variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <br />
        <Button onClick={signInUsingGoogle}>GoogleSignIn</Button>
        <br />
        <Link to="/register">Sign Up</Link>
      </Form>
    </div>
  );
};

export default Login;

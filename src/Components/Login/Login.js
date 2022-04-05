import React from "react";
import { Button, Form } from "react-bootstrap-v5";
import Banner from "../Banner/Banner";
import MenuBar from "../MenuBar/MenuBar";

const Login = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <Banner></Banner>
      <h1>Please Login</h1>
      <Form>
        <Form.Group className="mb-3" style={{marginRight:"485px",marginLeft:"485px"}} controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" style={{marginRight:"485px",marginLeft:"485px",borderRadius:"10px"}} controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button style={{width:"300px"}} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;

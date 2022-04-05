import React from "react";
import { Button, Form } from "react-bootstrap-v5";

const Register = () => {
  return (
    <div>
      <h1>Please Registration </h1>
      <Form>
        <Form.Group className="mb-3" style={{marginRight:"485px",marginLeft:"485px"}} controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" style={{marginRight:"485px",marginLeft:"485px",borderRadius:"10px"}} controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" style={{marginRight:"485px",marginLeft:"485px",borderRadius:"10px"}} controlId="formBasicPassword">
          <Form.Label>Retype Password</Form.Label>
          <Form.Control type="password" placeholder="Retype Password" />
        </Form.Group>
        <Button style={{width:"300px"}} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;

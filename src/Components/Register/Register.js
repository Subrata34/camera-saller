import React from "react";
import { Button, Form } from "react-bootstrap-v5";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import MenuBar from "../MenuBar/MenuBar";

const Register = () => {
  const[loginData,setLoginData]=useState({});
  const handleOnChange=e=>{
    const field=e.target.name;
    const value=e.target.value;

    const newLoginData={...loginData};
    newLoginData[field]=value;
    setLoginData(newLoginData);
  }
  const handleLoginChange=e=>{
    if(loginData.password!==loginData.password2){
      alert('Your password is not match');
      return ;
    }
    e.preventDefault();
  }
  return (
    <div>
      <MenuBar></MenuBar>
      <Banner></Banner>
      <h1>Sign Up </h1>
      <Form onsubmit={handleLoginChange}>
        <Form.Group
          className="mb-3"
          style={{ marginRight: "485px", marginLeft: "485px" }}
          controlId="formBasicEmail"
        >
          <Form.Label style={{marginRight:"190px"}}>Email address</Form.Label>
          <Form.Control onChange={handleOnChange} name="name" type="email" placeholder="Enter email" />
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
          <Form.Label style={{marginRight:"220px"}}>Password</Form.Label>
          <Form.Control onChange={handleOnChange} name="password" type="password" placeholder="Password" />
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
          <Form.Label style={{marginRight:"160px"}}>Retype Password</Form.Label>
          <Form.Control onChange={handleOnChange} name="password2" type="password" placeholder="Retype Password" />
        </Form.Group>
        <Button style={{ width: "300px" }} variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <Link to="/login">Already Sign In </Link>
      </Form>
    </div>
  );
};

export default Register;

import React, { useState, useContext, useEffect } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import ModalContext from "./ModalContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { open, setTitle, setContent, setButtonText } = useContext(ModalContext);
  setTitle("Login");
  setContent("Content");
  setButtonText("Button");

  const signIn = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (email && password) {
      open(true);
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={e => signIn(e)}>
          <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input
              type="email"
              name="userEmail"
              value={email}
              placeholder=""
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="userPassword">Password</Label>
            <Input
              type="password"
              name="userPassword"
              value={password}
              placeholder=""
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </FormGroup>
          <Button color="primary">
            <i className="fa fa-envelope-open-text mr-2"></i>Sign In With Email
          </Button>
        </Form>
        <p>or</p>
        <Button color="primary">
          <i className="fab fa-ethereum mr-2"></i>Sign In With Ethereum
        </Button>
      </Container>
      <p>
        Need an account? <a href="register">Create one</a>
      </p>
    </>
  );
};

export default Login;

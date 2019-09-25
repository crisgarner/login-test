import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

const Register = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { open } = props;
  const createAccount = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (email && password && confirmPassword) {
      open(true);
    }
  };
  return (
    <>
      <Container>
        <Form onSubmit={e => createAccount(e)}>
          <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input
              type="email"
              name="userEmail"
              value={email}
              placeholder="your@email.com"
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
              placeholder="your secret password"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="your secret password"
              onChange={e => {
                setConfirmPassword(e.target.value);
              }}
            />
          </FormGroup>
          <Button color="primary">
            <i className="fa fa-user-circle mr-2"></i>Create an Account
          </Button>
        </Form>
      </Container>
      <p>
        Have an account? <a href="#">Sign In</a>
      </p>
    </>
  );
};

export default Register;

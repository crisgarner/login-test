import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import ModalButton from "./ModalButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, open] = useState(false);

  const createAccount = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log("account created");
  };

  return (
    <>
      <div className="login">
        <Form onSubmit={e => createAccount(e)}>
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
          <Button color="primary" onClick={() => open(!isOpen)}>
            Create Account
          </Button>
          <ModalButton isOpen={isOpen} open={open}></ModalButton>
        </Form>
      </div>
    </>
  );
};

export default Login;

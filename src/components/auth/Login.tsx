import React, { useState, useContext, useEffect } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import ModalContext from "../modal/ModalContext";
import { useAuth } from "../hooks/useAuth";
import { useWeb3Auth } from "../hooks/useWeb3Auth";
import useWeb3Connect from "../hooks/useWeb3Connect";
//@ts-ignore
import WalletConnectProvider from "@walletconnect/web3-provider";
//@ts-ignore
import Fortmatic from "fortmatic";
import Portis from "@portis/web3";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { open, setTitle, setContent, setButtonText } = useContext(ModalContext);
  // setTitle("Login");
  // setContent("Content");
  // setButtonText("Button");
  const auth: any = useAuth();
  const web3Auth: any = useWeb3Auth();
  const webConnectOptions: any = {
    network: "rinkeby",
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: process.env.REACT_APP_INFURA_ID // required
        }
      },
      portis: {
        package: Portis, // required
        options: {
          id: process.env.REACT_APP_PORTIS_ID // required
        }
      },
      fortmatic: {
        package: Fortmatic, // required
        options: {
          key: process.env.REACT_APP_FORTMATIC_KEY // required
        }
      }
    }
  };
  const onConnectCallback = async (provider: any) => {
    await web3Auth.signIn(provider);
  };

  const web3connect: any = useWeb3Connect(webConnectOptions, onConnectCallback);

  const signIn = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (email && password) {
      const x = auth.signin(email, password);
      console.log(x);
      // open(true);
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
        <Button
          color="primary"
          onClick={() => {
            web3connect.toggleModal();
          }}
        >
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

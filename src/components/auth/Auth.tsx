import React, { useState } from "react";
import Modal from "../modal/Modal";
import Login from "./Login";
import Register from "./Register";
//@ts-ignore
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ModalProvider } from "../modal/ModalContext";
import { useAuth } from "../hooks/useAuth";
import { useWeb3Auth } from "../hooks/useWeb3Auth";
import Dashboard from "../Dashboard";
const Auth = () => {
  const [isOpen, open] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [buttonText, setButtonText] = useState("");
  const modalInfo = {
    isOpen,
    open,
    title,
    setTitle,
    content,
    setContent,
    buttonText,
    setButtonText
  };

  const auth = useAuth();
  const web3Auth: any = useWeb3Auth();

  return (
    <ModalProvider value={modalInfo}>
      <div className="login">
        <div className="wrapper">
          <h1>Logo</h1>
          <Router>{web3Auth.web3Auth ? <Dashboard></Dashboard> : <Routes></Routes>}</Router>
        </div>
      </div>
      <Modal></Modal>
    </ModalProvider>
  );
};

const Routes = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return <Login></Login>;
          }}
        />
        <Route
          exact
          path="/login"
          component={() => {
            return <Login></Login>;
          }}
        />
        <Route
          exact
          path="/register"
          component={() => {
            return <Register></Register>;
          }}
        />
      </Switch>
    </>
  );
};

export default Auth;

import React, { useState } from "react";
import ModalButton from "./ModalButton";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [isOpen, open] = useState(false);
  return (
    <>
      <div className="login">
        <div className="wrapper">
          <h1>Logo</h1>
          <Login open={open}></Login>
        </div>
      </div>
      <ModalButton open={open} isOpen={isOpen}></ModalButton>
    </>
  );
};

export default Auth;

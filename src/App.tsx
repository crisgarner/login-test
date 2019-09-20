import React from "react";
import "./App.scss";
import { Container } from "reactstrap";
import Login from "./components/Login";

const App = () => {
  return (
    <Container className="main">
      <Login></Login>
    </Container>
  );
};

export default App;

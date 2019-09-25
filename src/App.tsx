import React from "react";
import "./App.scss";
import { Container } from "reactstrap";
import Auth from "./components/Auth";

const App = () => {
  return (
    <Container className="main">
      <Auth></Auth>
    </Container>
  );
};

export default App;

import React from "react";
import "./App.scss";
import { Container } from "reactstrap";
import Auth from "./components/Auth";
import { ProvideAuth } from "./components/hooks/useAuth";

const App = () => {
  return (
    <ProvideAuth>
      <Container className="main">
        <Auth></Auth>
      </Container>
    </ProvideAuth>
  );
};

export default App;

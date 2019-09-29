import React from "react";
import "./App.scss";
import { Container } from "reactstrap";
import Auth from "./components/auth/Auth";
import { ProvideAuth } from "./components/hooks/useAuth";
import { Web3ProvideAuth } from "./components/hooks/useWeb3Auth";
const App = () => {
  return (
    <Web3ProvideAuth>
      <ProvideAuth>
        <Container className="main">
          <Auth></Auth>
        </Container>
      </ProvideAuth>
    </Web3ProvideAuth>
  );
};

export default App;

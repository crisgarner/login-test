import React from "react";
import { useWeb3Auth } from "../components/hooks/useWeb3Auth";
import { Container, Button } from "reactstrap";
import { addressShortener } from "./utils/utils";
//@ts-ignore
import Blockies from "react-blockies";

const Dashboard = () => {
  const web3Auth: any = useWeb3Auth();
  const signOut = () => {
    web3Auth.signOut();
  };
  return (
    <Container className="dashboard">
      <div className="mt-1 mb-2 ">
        <Blockies seed={web3Auth.web3Auth.accounts[0]} size={10} scale={6} className="blockie" />
      </div>
      <h4>
        <b>Account: </b>
        {addressShortener(web3Auth.web3Auth.accounts[0])}
      </h4>
      <Button color="primary">
        <i className="far fa-file-code mr-2"></i>Make Transaction
      </Button>
      <Button color="primary">
        <i className="fas fa-file-signature mr-2"></i>Sign Transaction
      </Button>
      <Button
        color="primary"
        onClick={() => {
          signOut();
        }}
      >
        <i className="fas fa-sign-out-alt mr-2"></i>Sign Out
      </Button>
    </Container>
  );
};

export default Dashboard;

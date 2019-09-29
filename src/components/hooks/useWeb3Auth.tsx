import React, { useState, useEffect, useContext, createContext } from "react";

//@ts-ignore
import Web3 from "web3";
import undefined from "firebase/empty-import";

interface web3AuthInterface {
  provider: any;
  web3: any;
  accounts: [string];
}

const web3AuthContext = createContext({});

const useWeb3ProvideAuth = () => {
  const [web3Auth, setWeb3Auth] = useState();
  const signIn = async (provider: any) => {
    let web3AuthObject: web3AuthInterface | undefined;
    if (provider) {
      const web3 = new Web3(provider); // add provider to web3
      const accounts: [string] = await web3.eth.getAccounts();
      web3AuthObject = {
        provider,
        web3,
        accounts
      };
      setWeb3Auth(web3AuthObject);
    }
    return web3AuthObject;
  };

  const signOut = () => {
    setWeb3Auth(null);
  };

  return { signIn, web3Auth, signOut };
};
export function Web3ProvideAuth({ children }: any) {
  const web3Auth = useWeb3ProvideAuth();
  return <web3AuthContext.Provider value={web3Auth}>{children}</web3AuthContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useWeb3Auth = () => useContext(web3AuthContext);

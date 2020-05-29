import React, { useState, createContext } from "react";

const AppContext = createContext();

function AppContextProvider(props) {
  const [logInStatus, setLogInStatus] = useState(false);
  const [isVendor, setIsVendor] = useState(true);
  const [signUpStateVendor, setSignUpStateVendor] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    companyName: "",
    alcohol: false,
    vegan: true,
  });

  const [signUpStateCustomer, setSignUpStateCustomer] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    age: "31-40",
    gender: "Female",
    icecreamFlavour: "",
    consent: true,
  });

  const [customerCoords, setCustomerCoords] = useState({
    positions: [{ lat: 51.5646, lng: 0.0047 }],
  });

  const providerValue = {
    logInStatus,
    setLogInStatus,
    isVendor,
    setIsVendor,
    signUpStateVendor,
    setSignUpStateVendor,
    signUpStateCustomer,
    setSignUpStateCustomer,
    customerCoords,
    setCustomerCoords,
  };

  return (
    <AppContext.Provider value={providerValue}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };

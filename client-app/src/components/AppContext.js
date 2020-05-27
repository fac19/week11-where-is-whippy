import React, { useState, createContext } from "react"

const AppContext = createContext()

function AppContextProvider(props) {
  const [logInStatus, setLogInStatus] = useState(true)
  const [isVendor, setIsVendor] = useState(true)
  const [signUpStateVendor, setSignUpStateVendor] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    companyName: "",
    alcohol: false,
    vegan: true,
  })

  const [signUpStateCustomer, setSignUpStateCustomer] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    age: "31-40",
    gender: "Female",
    icecreamFlavour: "",
    consent: true,
  })

  const providerValue = {
    logInStatus,
    setLogInStatus,
    isVendor,
    setIsVendor,
    signUpStateVendor,
    setSignUpStateVendor,
    signUpStateCustomer,
    setSignUpStateCustomer,
  }

  return (
    <AppContext.Provider value={providerValue}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }

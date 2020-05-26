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
    company_name: "",
    alcohol: "",
    vegan_option: "",
  })

  const [signUpStateCustomer, setSignUpStateCustomer] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    age: "",
    gender: "",
    icecream_flavour: "",
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

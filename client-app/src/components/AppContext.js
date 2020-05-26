import React, { useState, createContext } from "react"

const AppContext = createContext()

function AppContextProvider(props) {
  const [logInStatus, setLogInStatus] = useState(true)
  const [isVendor, setIsVendor] = useState(true)
  const [signUpState, setSignUpState] = useState(null)

  const providerValue = {
    logInStatus,
    setLogInStatus,
    isVendor,
    setIsVendor,
    signUpState,
    setSignUpState,
  }

  return (
    <AppContext.Provider value={providerValue}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }

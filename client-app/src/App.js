import React, { useState } from "react"
import "./App.css"
import Landing from "./components/shared/Landing.js"
import Header from "./components/shared/Header.js"

function App() {
  const [logInStatus, setLogInStatus] = useState(false)

  return (
    <div className="App">
      <Header logInStatus={logInStatus} />
      <Landing />
    </div>
  )
}

export default App

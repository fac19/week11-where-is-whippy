import React, { useState } from "react"
import "./App.css"
import Landing from "./components/shared/Landing.js"
import HeaderLoggedOut from "./components/shared/HeaderLoggedOut.js"

function App() {
  const [logInStatus, setLogInStatus] = useState(false)

  return (
    <div className="App">
      <header>
        <h1>Wheres Whippy</h1>

        {!logInStatus && <HeaderLoggedOut />}
      </header>
      <Landing />
    </div>
  )
}

export default App

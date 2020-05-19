import React, { useState } from "react"
import "./App.css"
import Landing from "./components/shared/Landing.js"
import Header from "./components/shared/Header.js"
// For react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const [logInStatus, setLogInStatus] = useState(false)

  return (
    <Router>
      <div className="App">
        <Header logInStatus={logInStatus} />
        {/* <Landing /> */}
        <Route path="/landing" component={Landing} />
      </div>
    </Router>
  )
}

export default App

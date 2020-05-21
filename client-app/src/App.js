import React, { useState } from "react"
import "./App.css"
import Landing from "./components/shared/landing.js"
import Header from "./components/shared/header.js"
import Login from "./components/shared/login.js"
// For react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const [logInStatus, setLogInStatus] = useState(false)
  const [isVendor, setIsVendor] = useState(true)
  console.log("App -> isVendor", isVendor)

  return (
    <Router>
      <div className="App">
        <Header logInStatus={logInStatus} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Landing setIsVendor={setIsVendor} isVendor={isVendor} />
            )}
          />
          <Route
            path="/login"
            component={() => (
              <Login setIsVendor={setIsVendor} isVendor={isVendor} />
            )}
          />
        </Switch>
      </div>
    </Router>
  )
}

/* <Route exact path="/props-through-render" render={(props) => <PropsPage {...props} title={`Props through render`} />} />

<Route
  path='/dashboard'
  component={() => <Dashboard isAuthed={true} />}
/> */

/* <Route
  path='/dashboard'
  render={(props) => <Dashboard {...props} isAuthed={true} />}
/> */

export default App

/* <Route path="/signup-c" component={signupCustomer} />
<Route path="/signup-v" component={signupVendor} /> */

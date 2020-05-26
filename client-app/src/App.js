import React, { useState } from "react"
import "./App.css"
import Landing from "./components/shared/landing.js"
import Header from "./components/shared/header.js"
import User from "./components/shared/user.js"
import Signup from "./components/shared/signup.js"
import Login from "./components/shared/login.js"
import Home from "./components/vendor/home.js"
import Heatmap from "./components/vendor/heatmap.js"
// For react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// For React context management
import { AppContextProvider } from "./components/AppContext"

function App() {
  const [logInStatus, setLogInStatus] = useState(false)
  const [isVendor, setIsVendor] = useState(true)

  return (
    <AppContextProvider>
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
              path="/user"
              component={() => <User isVendor={isVendor} />}
            />
            <Route
              path="/signup"
              component={() => <Signup isVendor={isVendor} />}
            />
            <Route
              path="/login"
              component={() => <Login isVendor={isVendor} />}
            />
            <Route path="/home" component={() => <Home />} />
            <Route path="/heatmap" component={() => <Heatmap />} />
          </Switch>
        </div>
      </Router>
    </AppContextProvider>
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

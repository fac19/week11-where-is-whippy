import React, { useContext } from "react";
import "./App.css";
import Landing from "./components/shared/landing.js";
import Header from "./components/shared/header.js";
import User from "./components/shared/user.js";
import Signup from "./components/shared/signup.js";
import Login from "./components/shared/login.js";
import Home from "./components/vendor/home.js";
import Heatmap from "./components/vendor/heatmap.js";
import Timetable from "./components/vendor/timetable.js";
import CustomerMap from "./components/customer/map.js";
// For react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// For React context management
import { AppContextProvider } from "./components/AppContext";

function App() {
  // const { logInStatus, isVendor } = useContext(AppContext);

  // Helper function to see if user is logged in and if so redirects them
  // function loggedInRedirect() {
  //   if (logInStatus && isVendor) {
  //     return <Redirect to="/home" />;
  //   }
  //   if (logInStatus && !isVendor) {
  //     return <Redirect to="/map" />;
  //   }
  // }

  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={() => <Landing />}>
              {/* {loggedInRedirect()} */}
            </Route>
            <Route path="/user" component={() => <User />} />
            <Route path="/signup" component={() => <Signup />} />
            <Route path="/login" component={() => <Login />} />
            <Route path="/home" component={() => <Home />} />
            <Route path="/heatmap" component={() => <Heatmap />} />
            <Route path="/map" component={() => <CustomerMap />} />
          </Switch>
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;

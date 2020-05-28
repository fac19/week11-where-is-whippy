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
  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={() => <Landing />} />
            <Route path="/user" component={() => <User />} />
            <Route path="/signup" component={() => <Signup />} />
            <Route path="/login" component={() => <Login />} />
            <Route path="/home" component={() => <Home />} />
            <Route path="/heatmap" component={() => <Heatmap />} />
            <Route path="/map" component={() => <CustomerMap />} />
            <Route path="/timetable" component={() => <Timetable />} />
          </Switch>
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;

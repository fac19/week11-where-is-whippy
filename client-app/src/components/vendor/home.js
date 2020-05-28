// Home page for vendor - includes current route and links to add/ change route + see heatmap

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import { PinkSmallButton, PageContainer } from "../../styles/buttons";
import { Label, Input } from "../../styles/form";

export default function Home() {
  const [routeName, setRouteName] = React.useState("");

  const {
    logInStatus,
    setLogInStatus,
    isVendor,
    signUpStateVendor,
    signUpStateCustomer,
  } = useContext(AppContext);

  function handleSubmit(event) {
    //   PRINT THE SELECTED ROUTE
    //   event.preventDefault();
    //fetch request to the api and 'SELECT * FROM routes where route_name = {routeName}
    //.then(data => return data- we want to print the data)
  }

  function handleRoute(event) {
    setRouteName(event.target.value);
  }

  function displayOptions() {
    //fetch request to AP `SELECT route_name FROM routes WHERE vendor_id == {vendor_id}
    //.then(data => data.forEach(print as option))
  }

  const showUserName = () => {
    return isVendor ? signUpStateVendor.name : signUpStateCustomer.name;
  };

  return (
    <PageContainer>
      <h2>
        Welcome back
        <str>
          <i>{showUserName}</i>
        </str>
        !
      </h2>
      <h2>Today's route is:</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="routes">Select routes</label>
        <select onChange={handleRoute} id="routes">
          {/* Run displayOptions */}
          <option value="">Route 1</option>
          <option value=""> Route 2</option>
          <option value=""> Route 3</option>
        </select>
        <button type="submit">Choose</button>
      </form>

      <section></section>

      <section>
        <p>Turn on alerts for customers</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </section>

      <section>
        <Link
          to={{
            pathname: "/timetable",
            state: {
              editSchedule: false,
            },
          }}
        >
          <PinkSmallButton>Create a New Schedule</PinkSmallButton>
        </Link>

        <Link to="/heatmap">
          <PinkSmallButton>View Heatmap</PinkSmallButton>
        </Link>
      </section>
    </PageContainer>
  );
}

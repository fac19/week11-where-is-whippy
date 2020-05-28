// Home page for vendor - includes current route and links to add/ change route + see heatmap

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import { PinkButton, PageContainer } from "../../styles/buttons";

export default function Home() {
  const [routeName, setRouteName] = React.useState("");

  const { logInStatus, setLogInStatus } = useContext(AppContext);

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

  return (
    <PageContainer>
      {setLogInStatus(true)}
      <h2>
        Welcome back
        <str>
          <i>name</i>
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
          <PinkButton>Create a New Schedule</PinkButton>
        </Link>

        <Link to="/heatmap">
          <PinkButton>View Heatmap</PinkButton>
        </Link>
      </section>
    </PageContainer>
  );
}

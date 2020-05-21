// Home page for vendor - includes current route and links to add/ change route + see heatmap
import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  const [routeName, setRouteName] = React.useState("")

  function handleSubmit(event) {
    //   PRINT THE SELECTED ROUTE
    //   event.preventDefault();
    //fetch request to the api and 'SELECT * FROM routes where route_name = {routeName}
    //.then(data => return data- we want to print the data)
  }

  function handleRoute(event) {
    setRouteName(event.target.value)
  }

  function displayOptions() {
    //fetch request to AP `SELECT route_name FROM routes WHERE vendor_id == {vendor_id}
    //.then(data => data.forEach(print as option))
  }

  return (
    <section>
      <h2 className="home-subtitle">
        Welcome back
        <str>
          <i>name</i>
        </str>
        !
      </h2>
      <h2 className="home-subtitle">Today's route is:</h2>

      <form className="home-dropdown" onSubmit={handleSubmit}>
        <label className="home-dropdown__label" htmlFor="routes">
          Select routes
        </label>
        <select
          onChange={handleRoute}
          id="routes"
          className="home-dropdown__input"
        >
          {/* Run displayOptions */}
          <option value="">Route 1</option>
          <option value=""> Route 2</option>
          <option value=""> Route 3</option>
        </select>
        <button className="home-dropdown__submit-btn" type="submit">
          Choose
        </button>
      </form>

      <section className="current-route"></section>

      <section className="toggleAlerts">
        <p className="toggleAlert-subtitle">Turn on alerts for customers</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </section>

      <section className="home-links">
        <Link to="/schedule" className="home-link__schedule">
          Create a new schedule
        </Link>

        <Link
          to={{
            pathname: "/schedule",
            state: {
              editSchedule: true,
            },
          }}
          className="home-link__schedule"
        >
          Edit schedule
        </Link>

        <Link
          to={{
            pathname: "/schedule",
            state: {
              editSchedule: false,
            },
          }}
          className="home-link__schedule"
        >
          Update schedule
        </Link>

        <Link to="/heatmap" className="home-link__heatmap">
          View heatmap
        </Link>
      </section>
    </section>
  )
}

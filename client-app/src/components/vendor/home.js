import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import {
  PinkButton,
  PinkSmallButton,
  PageContainer,
  StyledLink,
} from "../../styles/buttons";
import { Title } from "../../styles/text";
import { Label, Input, FormContainer } from "../../styles/form";

export default function Home() {
  const [routeName, setRouteName] = React.useState("");

  const {
    logInStatus,
    setLogInStatus,
    isVendor,
    signUpStateVendor,
    signUpStateCustomer,
  } = useContext(AppContext);

  return (
    <PageContainer>
      <Title>
        Welcome back
        {isVendor ? (
          <i> {signUpStateVendor.email}</i>
        ) : (
          <i> {signUpStateCustomer.email}</i>
        )}
        !
      </Title>
      <Title>Today's route is:</Title>

      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="routes">Select routes</Label>
        <select onChange={handleRoute} id="routes">
          {/* Run displayOptions */}
          <option value="">Route 1</option>
          <option value=""> Route 2</option>
          <option value=""> Route 3</option>
        </select>
        <PinkSmallButton type="submit">Choose</PinkSmallButton>
      </FormContainer>

      <section>
        <p>Turn on alerts for customers</p>
        <label>
          <input type="checkbox" />
        </label>
      </section>

      <section>
        <StyledLink
          to={{
            pathname: "/timetable",
            state: {
              editSchedule: false,
            },
          }}
        >
          <PinkSmallButton>Create a New Schedule</PinkSmallButton>
        </StyledLink>

        <StyledLink to="/heatmap">
          <PinkSmallButton>Find customers</PinkSmallButton>
        </StyledLink>
      </section>
    </PageContainer>
  );
}

//Please ignore
// function handleSubmit(event) {
//   //   PRINT THE SELECTED ROUTE
//   //   event.preventDefault();
//   //fetch request to the api and 'SELECT * FROM routes where route_name = {routeName}
//   //.then(data => return data- we want to print the data)
// }

// function handleRoute(event) {
//   setRouteName(event.target.value);
// }

// function displayOptions() {
//   //fetch request to AP `SELECT route_name FROM routes WHERE vendor_id == {vendor_id}
//   //.then(data => data.forEach(print as option))
// }

import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  postVendorSignUpInformation,
  postCustomerSignUpInformation,
} from "../../utils/postData";
import { AppContext } from "../AppContext";
import { Button, BlueButton, PinkButton } from "../../styles/buttons";
import { textStyle } from "../../styles/text";
import {
  Label,
  Input,
  Legend,
  FormContainer,
  FieldSet,
} from "../../styles/form";

import { BrowserRouter as Router, Redirect } from "react-router-dom";

// ***TEAM NOTES***
// Radio buttons are not much fun
// The value attribute of a <input/> tag only be a string
// The checked attribute on a radio button needs to a boolean (for alcohol or veganOption)
// So in the handleOnChangeVendor function we need to convert "true" to true / "false" to false
// Then update the state

// If you use a ternary operator condition ? expressionIfTrue : expressionIfFalse
// In JSX make sure to wrap each expression in a div or Fragment
// JSX Example:  {condition ? <>(expressionIfTrue)</> : <>(expressionIfFalse)</>}

export default function SignUp() {
  const {
    logInStatus,
    setLogInStatus,
    isVendor,
    setIsVendor,
    signUpStateVendor,
    setSignUpStateVendor,
    signUpStateCustomer,
    setSignUpStateCustomer,
  } = useContext(AppContext);

  // ***NOTES***
  // name, pasword and email are common to both the vendor and customer
  // A ternary is user to render the other customer or vendor inputs
  // JS functions have been extracted from JSX into helper functions

  const handleChange = (e) => {
    if (isVendor) {
      handleOnChangeVendor(e);
    } else {
      handleOnChangeCustomer(e);
    }
  };

  const handleOnChangeVendor = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    if (value === "true") {
      value = true;
    }
    if (value === "false") {
      value = false;
    }
    const newSignUpStateVendor = {
      ...signUpStateVendor,
      [property]: value,
    };
    setSignUpStateVendor(newSignUpStateVendor);
  };

  const handleOnChangeCustomer = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    if (value === "true") {
      value = true;
    }
    if (value === "false") {
      value = false;
    }
    const newSignUpStateCustomer = {
      ...signUpStateCustomer,
      [property]: value,
    };
    setSignUpStateCustomer(newSignUpStateCustomer);
  };

  const handleSubmit = (e) => {
    if (isVendor) {
      handleSubmitVendor(e);
    } else {
      handleSubmitCustomer(e);
    }
  };

  const handleSubmitVendor = (e) => {
    e.preventDefault();
    postVendorSignUpInformation(signUpStateVendor)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Unable to signup. API responded with status code: ${res.status}`
          );
        } else {
          return res.json();
        }
      })
      .then((body) => {
        window.localStorage.setItem("token", body.access_token);
        setLogInStatus(true);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmitCustomer = (e) => {
    e.preventDefault();
    postCustomerSignUpInformation(signUpStateCustomer)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Unable to signup. API responded with status code: ${res.status}`
          );
        } else {
          return res.json();
        }
      })
      .then((body) => {
        window.localStorage.setItem("token", body.access_token);
        setLogInStatus(true);
      })
      .catch((err) => console.error(err));
  };

  // When component mounts checks to see if user is logged in
  function loggedInStatusCheckerAndRedirect() {
    if (logInStatus && isVendor) {
      return <Redirect to="/home" />;
    }
    if (logInStatus && !isVendor) {
      return <Redirect to="/map" />;
    }
  }

  // Input value helper functions
  const inputValueName = isVendor
    ? signUpStateVendor.name
    : signUpStateCustomer.name;

  const inputValueEmail = isVendor
    ? signUpStateVendor.email
    : signUpStateCustomer.email;

  const inputValuePassword = isVendor
    ? signUpStateVendor.password
    : signUpStateCustomer.password;

  return (
    <FormContainer onSubmit={handleSubmit}>
      {loggedInStatusCheckerAndRedirect()}
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        id="name"
        name="name"
        required
        onChange={handleChange}
        value={inputValueName}
      />

      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        name="email"
        required
        onChange={handleChange}
        value={inputValueEmail}
      />

      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        id="password"
        name="password"
        required
        onChange={handleChange}
        value={inputValuePassword}
      />
      {/* THIS IS THE TERNARY */}
      {isVendor ? (
        <>
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input
            type="tel"
            id="mobile"
            name="mobile"
            required
            value={signUpStateVendor.mobile}
            onChange={handleOnChangeVendor}
          />

          <Label htmlFor="companyName">Company Name</Label>
          <Input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={signUpStateVendor.companyName}
            onChange={handleOnChangeVendor}
          />

          <FieldSet id="fieldset-vendorAlcohol">
            <Legend>Do you sell alcohol?</Legend>
            <Label htmlFor="alcoholYes">Yes</Label>
            <Input
              type="radio"
              id="alcoholYes"
              name="alcohol"
              value="true"
              checked={signUpStateVendor.alcohol === true}
              onChange={handleOnChangeVendor}
            />

            <Label htmlFor="alcoholNo">No</Label>
            <Input
              type="radio"
              id="alcoholNo"
              name="alcohol"
              value="false"
              checked={signUpStateVendor.alcohol === false}
              onChange={handleOnChangeVendor}
            />
          </FieldSet>

          <FieldSet id="fieldset-vendorVegan">
            <Legend>Do you offer vegan options?</Legend>
            <Label htmlFor="veganYes">Yes</Label>
            <Input
              type="radio"
              id="veganYes"
              name="vegan"
              value="true"
              checked={signUpStateVendor.vegan === true}
              onChange={handleOnChangeVendor}
            />

            <Label htmlFor="veganNo">No</Label>
            <Input
              type="radio"
              id="veganNo"
              name="vegan"
              value="false"
              checked={signUpStateVendor.vegan === false}
              onChange={handleOnChangeVendor}
            />
          </FieldSet>

          <PinkButton type="submit">Sign Up</PinkButton>
        </>
      ) : (
        <>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            required
            value={signUpStateCustomer.username}
            onChange={handleOnChangeCustomer}
          />

          <fieldset id="fieldset-customer-age">
            <Legend>What is your age group?</Legend>
            <Label htmlFor="gender-1">14-18</Label>
            <Input
              type="radio"
              id="age1"
              name="age"
              value="14-18"
              checked={signUpStateCustomer.age === "14-18"}
              onChange={handleOnChangeCustomer}
            />
            <Label htmlFor="gender-2">19-24</Label>
            <Input
              type="radio"
              id="age2"
              name="age"
              value="19-24"
              checked={signUpStateCustomer.age === "19-24"}
              onChange={handleOnChangeCustomer}
            />
            <Label htmlFor="ageGroup3">25-30</Label>
            <Input
              type="radio"
              id="age3"
              name="age"
              value="25-30"
              checked={signUpStateCustomer.age === "25-30"}
              onChange={handleOnChangeCustomer}
            />
            <Label htmlFor="ageGroup4">31-40</Label>
            <Input
              type="radio"
              id="age4"
              name="age"
              value="31-40"
              checked={signUpStateCustomer.age === "31-40"}
              onChange={handleOnChangeCustomer}
            />
          </fieldset>

          <fieldset id="fieldset-gender">
            <Legend>What is your gender?</Legend>
            <Label htmlFor="gender-1">Male</Label>
            <Input
              type="radio"
              id="gender-1"
              name="gender"
              value="Male"
              checked={signUpStateCustomer.gender === "Male"}
              onChange={handleOnChangeCustomer}
            />
            <Label htmlFor="gender-2">Female</Label>
            <Input
              type="radio"
              id="gender-2"
              name="gender"
              value="Female"
              checked={signUpStateCustomer.gender === "Female"}
              onChange={handleOnChangeCustomer}
            />
            <Label htmlFor="gender-3">Nonbinary</Label>
            <Input
              type="radio"
              id="gender-3"
              name="gender"
              value="Nonbinary"
              checked={signUpStateCustomer.gender === "Nonbinary"}
              onChange={handleOnChangeCustomer}
            />
            <Label htmlFor="gender-4">Prefer not to say</Label>
            <Input
              type="radio"
              id="gender-4"
              name="gender"
              value="Prefer not to say"
              checked={signUpStateCustomer.gender === "Prefer not to say"}
              onChange={handleOnChangeCustomer}
            />
          </fieldset>

          <Label htmlFor="icecreamFlavour">Icecream Flavour</Label>
          <Input
            type="text"
            id="icecreamFlavour"
            name="icecreamFlavour"
            required
            value={signUpStateCustomer.icecreamFlavour}
            onChange={handleOnChangeCustomer}
          />

          <fieldset>
            <Legend>
              In order to use this app, I consent to sharing my location
              information
            </Legend>
            <Label htmlFor="consentYes">I consent</Label>
            <Input
              type="radio"
              id="consentYes"
              name="consent"
              value="true"
              checked={signUpStateCustomer.consent === true}
              onChange={handleOnChangeCustomer}
            />
            <Label htmlFor="consentNo">I do not consent</Label>
            <Input
              type="radio"
              id="consentNo"
              name="consent"
              value="false"
              checked={signUpStateCustomer.consent === false}
              onChange={handleOnChangeCustomer}
            />
          </fieldset>

          <BlueButton type="submit">Sign Up</BlueButton>
        </>
      )}
    </FormContainer>
  );
}

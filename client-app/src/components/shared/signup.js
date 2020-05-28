import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import postSignUpInformation from "../../utils/postData";
import { AppContext } from "../AppContext";
import { Button, BlueButton, PinkButton } from "../../styles/buttons";
import { textStyle } from "../../styles/text";
import { Label, Input, Legend, FormContainer } from "../../styles/form";

// ***NOTES***
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
    isVendor,
    setIsVendor,
    signUpStateVendor,
    setSignUpStateVendor,
    signUpStateCustomer,
    setSignUpStateCustomer,
  } = useContext(AppContext);

  const handleOnChangeVendor = (e) => {
    debugger;
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

  const handleSubmitVendor = (e) => {
    e.preventDefault();
    console.log(`Posting vendor object:`, signUpStateVendor);
    postSignUpInformation(signUpStateVendor).then((token) => {
      console.log(token);
      // window.localStorage.setItem("token", body)
    });
  };

  const handleSubmitCustomer = (e) => {
    e.preventDefault();
    console.log(`Posting customer object:`, signUpStateCustomer);
  };

  // ***NOTES***
  // name, pasword and email are common to both the vendor and customer
  // A ternary is user to render the other customer or vendor inputs

  return (
    <FormContainer
      onSubmit={
        isVendor ? (e) => handleSubmitVendor(e) : (e) => handleSubmitCustomer(e)
      }
    >
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        id="name"
        name="name"
        required
        onChange={
          isVendor
            ? (e) => handleOnChangeVendor(e)
            : (e) => handleOnChangeCustomer(e)
        }
        value={isVendor ? signUpStateVendor.name : signUpStateCustomer.name}
      />

      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        name="email"
        required
        onChange={
          isVendor
            ? (e) => handleOnChangeVendor(e)
            : (e) => handleOnChangeCustomer(e)
        }
        value={isVendor ? signUpStateVendor.email : signUpStateCustomer.email}
      />

      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        id="password"
        name="password"
        required
        onChange={
          isVendor
            ? (e) => handleOnChangeVendor(e)
            : (e) => handleOnChangeCustomer(e)
        }
        value={
          isVendor ? signUpStateVendor.password : signUpStateCustomer.password
        }
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
            onChange={(e) => handleOnChangeVendor(e)}
          />

          <Label htmlFor="companyName">Company Name</Label>
          <Input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={signUpStateVendor.companyName}
            onChange={(e) => handleOnChangeVendor(e)}
          />

          <fieldset id="fieldset-vendorAlcohol">
            <Legend>Do you sell alcohol?</Legend>
            <Label htmlFor="alcoholYes">Yes</Label>
            <Input
              type="radio"
              id="alcoholYes"
              name="alcohol"
              value="true"
              checked={signUpStateVendor.alcohol === true}
              onChange={(e) => handleOnChangeVendor(e)}
            />

            <Label htmlFor="alcoholNo">No</Label>
            <Input
              type="radio"
              id="alcoholNo"
              name="alcohol"
              value="false"
              checked={signUpStateVendor.alcohol === false}
              onChange={(e) => handleOnChangeVendor(e)}
            />
          </fieldset>

          <fieldset id="fieldset-vendorVegan">
            <Legend>Do you offer vegan options?</Legend>
            <Label htmlFor="veganYes">Yes</Label>
            <Input
              type="radio"
              id="veganYes"
              name="vegan"
              value="true"
              checked={signUpStateVendor.vegan === true}
              onChange={(e) => handleOnChangeVendor(e)}
            />

            <Label htmlFor="veganNo">No</Label>
            <Input
              type="radio"
              id="veganNo"
              name="vegan"
              value="false"
              checked={signUpStateVendor.vegan === false}
              onChange={(e) => handleOnChangeVendor(e)}
            />
          </fieldset>
          <Link to="/home" onClick={() => setIsVendor(true)}>
            <PinkButton className="signup-btn-vendors">Sign Up</PinkButton>
          </Link>
        </>
      ) : (
        <>
          <fieldset id="fieldset-customer-age">
            <Legend>What is your age group?</Legend>
            <Label htmlFor="gender-1">14-18</Label>
            <Input
              type="radio"
              id="age1"
              name="age"
              value="14-18"
              checked={signUpStateCustomer.age === "14-18"}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
            <Label htmlFor="gender-2">19-24</Label>
            <Input
              type="radio"
              id="age2"
              name="age"
              value="19-24"
              checked={signUpStateCustomer.age === "19-24"}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
            <Label htmlFor="ageGroup3">25-30</Label>
            <Input
              type="radio"
              id="age3"
              name="age"
              value="25-30"
              checked={signUpStateCustomer.age === "25-30"}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
            <Label htmlFor="ageGroup4">31-40</Label>
            <Input
              type="radio"
              id="age4"
              name="age"
              value="31-40"
              checked={signUpStateCustomer.age === "31-40"}
              onChange={(e) => handleOnChangeCustomer(e)}
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
              onChange={(e) => handleOnChangeCustomer(e)}
            />
            <Label htmlFor="gender-2">Female</Label>
            <Input
              type="radio"
              id="gender-2"
              name="gender"
              value="Female"
              checked={signUpStateCustomer.gender === "Female"}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
            <Label htmlFor="gender-3">Nonbinary</Label>
            <Input
              type="radio"
              id="gender-3"
              name="gender"
              value="Nonbinary"
              checked={signUpStateCustomer.gender === "Nonbinary"}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
            <Label htmlFor="gender-4">Prefer not to say</Label>
            <Input
              type="radio"
              id="gender-4"
              name="gender"
              value="Prefer not to say"
              checked={signUpStateCustomer.gender === "Prefer not to say"}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
          </fieldset>

          <Label htmlFor="icecreamFlavour">Icecream Flavour</Label>
          <Input
            type="text"
            id="icecreamFlavour"
            name="icecreamFlavour"
            required
            value={signUpStateCustomer.icecreamFlavour}
            onChange={(e) => handleOnChangeCustomer(e)}
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
              onChange={(e) => handleOnChangeCustomer(e)}
            />
            <Label htmlFor="consentNo">I do not consent</Label>
            <Input
              type="radio"
              id="consentNo"
              name="consent"
              value="false"
              checked={signUpStateCustomer.consent === false}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
          </fieldset>
          <Link to="/map" onClick={() => setIsVendor(false)}>
            {signUpStateCustomer.consent && (
              <BlueButton className="signup-btn-customers">Sign Up</BlueButton>
            )}
          </Link>
        </>
      )}
    </FormContainer>
  );
}

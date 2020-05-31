import React, { useContext } from "react";
import {
  Button,
  CustomerButton,
  VendorButton,
  StyledLink,
} from "../../styles/buttons";
import { textStyle } from "../../styles/text";
import { Label, Input, FormContainer } from "../../styles/form";

import {
  postVendorLoginInformation,
  postCustomerLoginInformation,
} from "../../utils/postData";

import { AppContext } from "../AppContext";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

export default function Login() {
  const {
    isVendor,
    logInStatus,
    setLogInStatus,
    signUpStateCustomer,
    setSignUpStateCustomer,
    signUpStateVendor,
    setSignUpStateVendor,
  } = useContext(AppContext);

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

    const newLogInStateVendor = {
      ...signUpStateVendor,
      [property]: value,
    };
    setSignUpStateVendor(newLogInStateVendor);
  };

  const handleOnChangeCustomer = (e) => {
    let property = e.target.name;
    let value = e.target.value;

    const newLogInStateCustomer = {
      ...signUpStateCustomer,
      [property]: value,
    };
    setSignUpStateCustomer(newLogInStateCustomer);
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
    postVendorLoginInformation(signUpStateVendor)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Unable to login. API responded with status code: ${res.status}`
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
    postCustomerLoginInformation(signUpStateCustomer)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Unable to login. API responded with status code: ${res.status}`
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

  const inputValueEmail = isVendor
    ? signUpStateVendor.email
    : signUpStateCustomer.email;

  const inputValuePassword = isVendor
    ? signUpStateVendor.password
    : signUpStateCustomer.password;

  function loggedInStatusCheckerAndRedirect() {
    if (logInStatus && isVendor) {
      return <Redirect to="/home" />;
    }
    if (logInStatus && !isVendor) {
      return <Redirect to="/map" />;
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      {loggedInStatusCheckerAndRedirect()}

      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        name="email"
        required
        onChange={handleChange}
        value={inputValueEmail}
        placeholder="Email Address"
      />
      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        id="password"
        name="password"
        required
        onChange={handleChange}
        value={inputValuePassword}
        placeholder="Password"
      />

      {isVendor ? (
        <VendorButton type="submit">Login</VendorButton>
      ) : (
        <CustomerButton type="submit">Login</CustomerButton>
      )}
    </FormContainer>
  );
}

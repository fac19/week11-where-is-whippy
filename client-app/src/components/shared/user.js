//Second page (have chosen whether customer/vendor) - choice between login + signup
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import {
  CustomerButton,
  VendorButton,
  SignUpButtonVendor,
  SignUpButtonCustomer,
  PageContainer,
  StyledLink,
} from "../../styles/buttons";
import { LandingImg } from "../../styles/landing";

export default function User() {
  const { isVendor, setIsVendor } = useContext(AppContext);
  return (
    <section>
      {isVendor ? (
        <PageContainer>
          <h2>Find ice cream lovers today</h2>
          <LandingImg
            src="https://image.flaticon.com/icons/svg/346/346178.svg"
            alt="Ice cream cone"
          />

          <StyledLink to="/login" onClick={() => setIsVendor(true)}>
            <VendorButton>Log In</VendorButton>
          </StyledLink>

          <StyledLink to="/signup" onClick={() => setIsVendor(true)}>
            <SignUpButtonVendor>Sign Up</SignUpButtonVendor>
          </StyledLink>
        </PageContainer>
      ) : (
        <PageContainer>
          <h2>Fancy an ice cream now? Find your nearby mr.whippy now.</h2>
          <LandingImg
            src="https://image.flaticon.com/icons/svg/346/346178.svg"
            alt="Ice cream cone"
          />

          <StyledLink to="/login" onClick={() => setIsVendor(false)}>
            <CustomerButton>Log In</CustomerButton>
          </StyledLink>

          <StyledLink to="/signup" onClick={() => setIsVendor(false)}>
            <SignUpButtonCustomer>Sign Up</SignUpButtonCustomer>
          </StyledLink>
        </PageContainer>
      )}
    </section>
  );
}

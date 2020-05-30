//Second page (have chosen whether customer/vendor) - choice between login + signup
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import {
  BlueButton,
  PinkButton,
  SignUpButton,
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
            <PinkButton>Log In</PinkButton>
          </StyledLink>

          <StyledLink to="/signup" onClick={() => setIsVendor(true)}>
            <SignUpButton>Sign Up</SignUpButton>
          </StyledLink>
        </PageContainer>
      ) : (
        <PageContainer>
          <h2>Find ice cream today</h2>
          <LandingImg
            src="https://image.flaticon.com/icons/svg/346/346178.svg"
            alt="Ice cream cone"
          />

          <StyledLink to="/signup" onClick={() => setIsVendor(false)}>
            <BlueButton>Sign Up</BlueButton>
          </StyledLink>

          <StyledLink to="/login" onClick={() => setIsVendor(false)}>
            <BlueButton>Log In</BlueButton>
          </StyledLink>
        </PageContainer>
      )}
    </section>
  );
}

//Second page (have chosen whether customer/vendor) - choice between login + signup
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import { BlueButton, PinkButton, PageContainer } from "../../styles/buttons";

export default function User() {
  const { isVendor, setIsVendor } = useContext(AppContext);
  return (
    <section>
      {isVendor ? (
        <PageContainer>
          <h2>Find ice cream lovers today</h2>
          <img src="#" />

          <Link to="/signup" onClick={() => setIsVendor(true)}>
            <PinkButton>Sign Up</PinkButton>
          </Link>

          <Link to="/login" onClick={() => setIsVendor(true)}>
            <PinkButton>Log In</PinkButton>
          </Link>
        </PageContainer>
      ) : (
        <PageContainer>
          <h2>Find ice cream today</h2>
          <img src="#" />

          <Link to="/signup" onClick={() => setIsVendor(false)}>
            <BlueButton>Sign Up</BlueButton>
          </Link>

          <Link to="/login" onClick={() => setIsVendor(false)}>
            <BlueButton>Log In</BlueButton>
          </Link>
        </PageContainer>
      )}
    </section>
  );
}

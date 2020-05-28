//First page - choice between customer + vendor options
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import { BlueButton, PinkButton, PageContainer } from "../../styles/buttons.js";

export default function Landing() {
  const { isVendor, setIsVendor } = useContext(AppContext);

  return (
    <PageContainer>
      <h2>Tired of waiting for the jingle?</h2>
      <img src="#" alt="illustation" />
      <Link to="/user" onClick={() => setIsVendor(true)}>
        <PinkButton>Vendors</PinkButton>
      </Link>
      <Link to="/user" onClick={() => setIsVendor(false)}>
        <BlueButton>Customers</BlueButton>
      </Link>
    </PageContainer>
  );

  // function handleLoginLinkVendor() {
  //   alert("Vendor login button clicked")
  //   setIsVendor(true)
  // }

  // function handleLoginLinkCustomer() {
  //   console.log(isVendor)
  //   setIsVendor(false)
  //   console.log(isVendor)
  //   // alert("Customer login button clicked")
  // }
}

//First page - choice between customer + vendor options
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import { BlueButton, PinkButton, PageContainer } from "../../styles/buttons.js";

export default function Landing() {
  const { isVendor, setIsVendor } = useContext(AppContext);

  console.log("landing state: ", isVendor);

  return (
    <PageContainer>
      <h2 className="landing-subtitle">Tired of waiting for the jingle?</h2>
      <img className="landing-img" src="#" alt="illustation" />
      <Link to="/user" onClick={() => setIsVendor(true)}>
        <PinkButton className="landing-btn-vendors">Vendors</PinkButton>
      </Link>
      <Link to="/user" onClick={() => setIsVendor(false)}>
        <BlueButton className="landing-btn-customers">Customers</BlueButton>
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

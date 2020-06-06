//First page - choice between customer + vendor options
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import {
  CustomerButton,
  VendorButton,
  PageContainer,
  StyledLink,
} from "../../styles/buttons";
import { LandingImg, Title2, GlobalStyle } from "../../styles/landing";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";
import iceCreamVan from "./asset/icecreamvan.png";

export default function Landing() {
  const { isVendor, setIsVendor } = useContext(AppContext);

  const { width, height } = useWindowSize();

  return (
    <PageContainer>
      <Confetti width={width} height={height} />
      <Title2>
        Tired of waiting for the jingle?
      </Title2>
      <LandingImg src={iceCreamVan} alt="Ice cream cone" />
      <StyledLink to="/user" onClick={() => setIsVendor(false)}>
        <CustomerButton>Customer</CustomerButton>
      </StyledLink>
      <StyledLink to="/user" onClick={() => setIsVendor(true)}>
        <VendorButton>Vendor</VendorButton>
      </StyledLink>
    </PageContainer>
  );
}

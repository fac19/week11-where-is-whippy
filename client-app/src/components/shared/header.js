import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { Title, HeaderArea, StyledLogInLink } from "../../styles/header.js";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";

export default function Header() {
  const { logInStatus, setLogInStatus } = useContext(AppContext);

  function removeToken() {
    window.localStorage.removeItem("token");
    setLogInStatus(false);
  }

  function headerStatus() {
    let token = localStorage.getItem("token");
    if (window.location.pathname == "/") {
      setLogInStatus(false);
      return;
    } else if (!token) {
      setLogInStatus(false);
      return <StyledLogInLink to="/">Log In or Sign Up Here!</StyledLogInLink>;
    } else {
      setLogInStatus(true);
      return (
        <StyledLogInLink onClick={removeToken} to="/">
          Log Out
        </StyledLogInLink>
      );
    }
  }

  // const { width, height } = useWindowSize()

  return (
    <HeaderArea>
      <Title>Where's Whippy</Title>
      {headerStatus()}
    </HeaderArea>
  );
}

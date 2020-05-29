import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { Title, HeaderArea, StyledLogInLink } from "../../styles/header.js";

export default function Header() {
  const { logInStatus, setLogInStatus } = useContext(AppContext);

  function removeToken() {
    window.localStorage.removeItem("token");
    setLogInStatus(false);
  }

  function headerStatus() {
    let token = localStorage.getItem("token");
    if (!token) {
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

  return (
    <HeaderArea>
      <Title>Where's Whippy</Title>
      {headerStatus()}
    </HeaderArea>
  );
}

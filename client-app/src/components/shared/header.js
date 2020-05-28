import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { Title, HeaderArea, LogInOption } from "../../styles/header.js";

export default function Header() {
  const { logInStatus, setLogInStatus } = useContext(AppContext);

  function removeToken() {
    return window.localStorage.removeItem("token");
  }

  function headerStatus() {
    let token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      setLogInStatus(false);
      console.log(logInStatus);
      return <LogInOption href="/">Log In or Sign Up Here!</LogInOption>;
    } else {
      setLogInStatus(true);
      console.log(logInStatus);
      // window.localStorage.removeItem("token");
      return (
        <LogInOption onClick={removeToken} href="/">
          Log Out
        </LogInOption>
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

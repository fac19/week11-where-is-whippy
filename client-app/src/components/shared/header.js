import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { Title, HeaderArea, LogInOption } from "../../styles/header.js";

export default function Header() {
  const { logInStatus, setLogInStatus } = useContext(AppContext);

  function headerStatus() {
    let token = localStorage.getItem("token");

    if (!token) {
      return <LogInOption href="/">Log In or Sign Up Here!</LogInOption>;
    } else {
      window.localStorage.removeItem("token");
      return <LogInOption href="/">Log Out</LogInOption>;
    }
  }

  return (
    <HeaderArea>
      <Title>Where's Whippy</Title>
      {headerStatus()}
    </HeaderArea>
  );
}

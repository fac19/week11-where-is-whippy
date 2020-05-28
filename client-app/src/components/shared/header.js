import React, { useContext } from "react"
import { AppContext } from "../AppContext"
import { Title, HeaderArea } from "../../styles/header.js"

export default function Header() {
  const { logInStatus } = useContext(AppContext)

  return (
    <HeaderArea>
      <Title>Where's Whippy</Title>
      {!logInStatus ? <a href="#">Log In</a> : <a href="#">Log Out</a>}
    </HeaderArea>
  )
}

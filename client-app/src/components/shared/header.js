import React, { useContext } from "react"
import { AppContext } from "../AppContext"

// { logInStatus }

export default function Header() {
  const { logInStatus } = useContext(AppContext)

  return (
    <header>
      <h1>Where's Whippy</h1>
      {!logInStatus ? <a href="#">Log In</a> : <a href="#">Log Out</a>}
    </header>
  )
}

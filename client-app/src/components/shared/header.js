import React from "react"

export default function Header({ logInStatus }) {
  return (
    <header>
      <h1>Where's Whippy</h1>
      {!logInStatus ? <a href="#">Log In</a> : <a href="#">Log Out</a>}
    </header>
  )
}

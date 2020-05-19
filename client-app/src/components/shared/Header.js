import React from "react"

export default function header({ logInStatus }) {
  return (
    <header>
      <h1>Where's Whippy</h1>
      {!logInStatus ? <a href="#">Log In</a> : <a href="#">Log Out</a>}
    </header>
  )
}

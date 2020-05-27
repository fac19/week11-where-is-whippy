//Second page (have chosen whether customer/vendor) - choice between login + signup
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../AppContext"
import { BlueButton, PinkButton } from "../../styles/buttons"

export default function User() {
  const { isVendor } = useContext(AppContext)
  console.log("user state: ", isVendor)

  return (
    <section>
      {isVendor ? (
        <section>
          <h2 className="user-subtitle">Find ice cream lovers today</h2>
          <img src="#" />

          <PinkButton href="/signup" className="signup-btn-vendors">
            Sign Up
          </PinkButton>
          <PinkButton href="/login" className="login-btn-vendors">
            Log In
          </PinkButton>
        </section>
      ) : (
        <section>
          <h2 className="user-subtitle">Find ice cream today</h2>
          <img src="#" />
          <Link to="/signup" className="signup-btn-customers">
            Signup Here
          </Link>

          <Link to="/login" className="login-btn-customer">
            Login Here
          </Link>
          {/* <BlueButton href="/signup" className="signup-btn-customers">
            Sign Up
          </BlueButton>
          <BlueButton href="/login" className="login-btn-customers">
            Log In
          </BlueButton> */}
        </section>
      )}
    </section>
  )
}

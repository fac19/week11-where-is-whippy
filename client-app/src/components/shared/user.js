//Second page (have chosen whether customer/vendor) - choice between login + signup
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../AppContext"
import { BlueButton, PinkButton } from "../../styles/buttons"

export default function User() {
  const { isVendor, setIsVendor } = useContext(AppContext)
  return (
    <section>
      {isVendor ? (
        <section>
          <h2 className="user-subtitle">Find ice cream lovers today</h2>
          <img src="#" />

          <Link to="/signup" onClick={() => setIsVendor(true)}>
            <PinkButton className="signup-btn-vendors">Sign Up</PinkButton>
          </Link>

          <Link to="/login" onClick={() => setIsVendor(true)}>
            <PinkButton className="login-btn-vendors">Log In</PinkButton>
          </Link>
        </section>
      ) : (
        <section>
          <h2 className="user-subtitle">Find ice cream today</h2>
          <img src="#" />

          <Link to="/signup" onClick={() => setIsVendor(false)}>
            <BlueButton className="signup-btn-customers">Sign Up</BlueButton>
          </Link>

          <Link to="/login" onClick={() => setIsVendor(false)}>
            <BlueButton className="login-btn-customers">Log In</BlueButton>
          </Link>
        </section>
      )}
    </section>
  )
}

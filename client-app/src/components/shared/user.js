//Second page (have chosen whether customer/vedor) - choice between login + signup
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../AppContext"

export default function User() {
  const { isVendor } = useContext(AppContext)
  return (
    <section>
      {isVendor ? (
        <section>
          <h2 className="user-subtitle">Find ice cream lovers today</h2>
          <img src="#" />
          <Link to="/signup" className="signup-btn-vendors">
            SIGNUP HERE
          </Link>

          <Link to="login" className="login-btn-vendors">
            LOGIN HERE
          </Link>
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
        </section>
      )}
    </section>
  )
}

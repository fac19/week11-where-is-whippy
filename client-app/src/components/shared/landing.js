import React from "react"
import { Link } from "react-router-dom"

export default function Landing({ setIsVendor, isVendor }) {
  console.log("Landing -> setIsVendor", setIsVendor)
  console.log(isVendor)
  return (
    <section>
      <h2 className="landing-subtitle">Tired of waiting for the jingle?</h2>
      <img
        className="landing-img"
        src="https://media.giphy.com/media/3orieXuD6SY02z1VtK/giphy.gif"
      />
      <Link
        to="/login"
        onClick={() => handleLoginLinkVendor()}
        className="landing-btn-vendors"
      >
        Vendors
      </Link>

      <Link
        to="/login"
        onClick={() => handleLoginLinkCustomer()}
        className="landing-btn-customers"
      >
        Customers
      </Link>
    </section>
  )

  function handleLoginLinkVendor() {
    alert("Vendor login button clicked")
    setIsVendor(true)
  }

  function handleLoginLinkCustomer() {
    console.log(isVendor)
    setIsVendor(false)
    console.log(isVendor)
    // alert("Customer login button clicked")
  }
}

import React from "react"

export default function Landing({ setIsVendor }) {
  console.log("Landing -> setIsVendor", setIsVendor)
  return (
    <section>
      <h2 className="landing-subtitle">Tired of waiting for the jingle?</h2>
      <img
        className="landing-img"
        src="https://media.giphy.com/media/3orieXuD6SY02z1VtK/giphy.gif"
      />
      <a
        onClick={() => handleLoginLinkVendor()}
        href="/login"
        className="landing-btn-vendors"
      >
        Vendors
      </a>
      <a
        onClick={() => handleLoginLinkCustomer()}
        href="/login"
        className="landing-btn-customers"
      >
        Customers
      </a>
    </section>
  )

  function handleLoginLinkVendor() {
    alert("Vendor login button clicked")
    setIsVendor(true)
  }

  function handleLoginLinkCustomer(isVendor) {
    alert("Customer login button clicked")
    setIsVendor(false)
    console.log(isVendor)
  }
}

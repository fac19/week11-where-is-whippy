import React from "react"

export default function Landing() {
  return (
    <section>
      <h3 class="landing-subtitle">Tired of waiting for the jingle?</h3>
      <img
        className="landing-img"
        src="https://media.giphy.com/media/3orieXuD6SY02z1VtK/giphy.gif"
      />
      <button className="landing-btn-vendors">Vendors</button>
      <button className="landing-btn-customers">Customers</button>
    </section>
  )
}

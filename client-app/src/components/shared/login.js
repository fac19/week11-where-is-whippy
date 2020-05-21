import React from "react"

export default function Login({ isVendor }) {
  return (
    <section>
      {isVendor ? (
        <h2 className="login-subtitle">Find ice cream lovers today</h2>
      ) : (
        <h2 className="login-subtitle">Find ice cream today</h2>
      )}
    </section>
  )
}

// <h2 className="login-subtitle">Find</h2>Find

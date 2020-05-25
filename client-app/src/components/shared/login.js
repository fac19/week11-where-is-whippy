import React from "react"

function Login({ isVendor }) {
  return (
    <section>
      {isVendor ? (
        <form>
          <label for="vendorEmail">Email</label>
          <input type="email" id="vendorEmail" name="email" required />

          <label for="vendorPassword">Password</label>
          <input type="password" id="vendorPassword" name="password" required />

          <button className="login-btn-vendor">Login</button>
        </form>
      ) : (
        <form>
          <label for="customerEmail">Email</label>
          <input type="email" id="customerEmail" name="email" required />

          <label for="customerPassword">Password</label>
          <input
            type="password"
            id="customerPassword"
            name="password"
            required
          />
          <button className="login-btn-customer">Login</button>
        </form>
      )}
    </section>
  )
}
// <h2 className="login-subtitle">Find</h2>Find

module.export = { Login, getLogin }

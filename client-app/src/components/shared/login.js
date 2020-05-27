import React, { useContext } from "react"
import { AppContext } from "../AppContext"

export default function Login() {
  const {
    isVendor,
    logInStatus,
    setLogInStatus,
    signUpStateCustomer,
    setSignUpStateCustomer,
    signUpStateVendor,
    setSignUpStateVendor,
  } = useContext(AppContext)

  const handleChange = (e) => {
    if(isVendor) { 
      handleOnChangeVendor(e)
    } else {
      handleOnChangeCustomer(e);
    }
  }

  const handleSubmit = (e) => {
    if(isVendor) {
      handleSubmitVendor(e);
    } else {
      handleSubmitCustomer(e);
    }
  }

  const handleOnChangeVendor = (e) => {
    let property = e.target.name
    let value = e.target.value

    const newLogInStateVendor = {
      ...signUpStateVendor,
      [property]: value,
    }
    setSignUpStateVendor(newLogInStateVendor)
  }

  const handleOnChangeCustomer = (e) => {}

  const handleSubmitVendor = (e) => {}

  const handleSubmitCustomer = (e) => {}

  const inputValue = isVendor ? signUpStateVendor.email : signUpStateCustomer.email;
  return (
    <form
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        onChange={handleChange}
        value={inputValue}
      />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />
      <button className="btn-login" type="submit">
        Login
      </button>
    </form>
  )
}
import React, {
  useEffect,
  useContext,
} from "react"
import postSignUpInformation from "../../utils/postData"
import { AppContext } from "../AppContext"

// ***NOTES***
// Radio buttons are not much fun
// The value attribute of a <input/> tag only be a string
// The checked attribute on a radio button needs to a boolean (for alcohol or veganOption)
// So in the handleOnChangeVendor function we need to convert "true" to true / "false" to false
// Then update the state

// If you use a ternary operator condition ? expressionIfTrue : expressionIfFalse
// In JSX make sure to wrap each expression in a div or Fragment
// JSX Example:  {condition ? <>(expressionIfTrue)</> : <>(expressionIfFalse)</>}

export default function SignUp() {
  const {
    isVendor,
    signUpStateVendor,
    setSignUpStateVendor,
    signUpStateCustomer,
    setSignUpStateCustomer,
  } = useContext(AppContext)

  const handleOnChangeVendor = (e) => {
    let property = e.target.name
    let value = e.target.value
    if (value === "true") {
      value = true
    }
    if (value === "false") {
      value = false
    }
    const newSignUpStateVendor = {
      ...signUpStateVendor,
      [property]: value,
    }
    setSignUpStateVendor(newSignUpStateVendor)
  }

  const handleOnChangeCustomer = (e) => {
    let property = e.target.name
    let value = e.target.value
    if (value === "true") {
      value = true
    }
    if (value === "false") {
      value = false
    }
    const newSignUpStateCustomer = {
      ...signUpStateCustomer,
      [property]: value,
    }
    setSignUpStateCustomer(newSignUpStateCustomer)
  }

  const handleSubmitVendor = (e) => {
    e.preventDefault()
    console.log(`Posting vendor object:`, signUpStateVendor)
  }

  const handleSubmitCustomer = (e) => {
    e.preventDefault()
    console.log(`Posting customer object:`, signUpStateCustomer)
  }
  
  // ***NOTES***
  // name, pasword and email are common to both the vendor and customer
  // A ternary is user to render the other customer or vendor inputs

  return (
    <form
      onSubmit={
        isVendor ? (e) => handleSubmitVendor(e) : (e) => handleSubmitCustomer(e)
      }
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        onChange={
          isVendor
            ? (e) => handleOnChangeVendor(e)
            : (e) => handleOnChangeCustomer(e)
        }
        value={isVendor ? signUpStateVendor.name : signUpStateCustomer.name}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        onChange={
          isVendor
            ? (e) => handleOnChangeVendor(e)
            : (e) => handleOnChangeCustomer(e)
        }
        value={isVendor ? signUpStateVendor.email : signUpStateCustomer.email}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        onChange={
          isVendor
            ? (e) => handleOnChangeVendor(e)
            : (e) => handleOnChangeCustomer(e)
        }
        value={
          isVendor ? signUpStateVendor.password : signUpStateCustomer.password
        }
      />
      {/* THIS IS THE TERNARY */}
      {isVendor ? (
        <>
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            required
            value={signUpStateVendor.mobile}
            onChange={(e) => handleOnChangeVendor(e)}
          />

          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={signUpStateVendor.companyName}
            onChange={(e) => handleOnChangeVendor(e)}
          />

          <fieldset id="fieldset-vendorAlcohol">
            <legend>Do you sell alcohol?</legend>
            <label htmlFor="alcoholYes">Yes</label>
            <input
              type="radio"
              id="alcoholYes"
              name="alcohol"
              value="true"
              checked={signUpStateVendor.alcohol === true}
              onChange={(e) => handleOnChangeVendor(e)}
            />

            <label htmlFor="alcoholNo">No</label>
            <input
              type="radio"
              id="alcoholNo"
              name="alcohol"
              value="false"
              checked={signUpStateVendor.alcohol === false}
              onChange={(e) => handleOnChangeVendor(e)}
            />
          </fieldset>

          <fieldset id="fieldset-vendorVegan">
            <legend>Do you offer vegan options?</legend>
            <label htmlFor="veganYes">Yes</label>
            <input
              type="radio"
              id="veganYes"
              name="veganOption"
              value="true"
              checked={signUpStateVendor.veganOption === true}
              onChange={(e) => handleOnChangeVendor(e)}
            />

            <label htmlFor="veganNo">No</label>
            <input
              type="radio"
              id="veganNo"
              name="veganOption"
              value="false"
              checked={signUpStateVendor.veganOption === false}
              onChange={(e) => handleOnChangeVendor(e)}
            />
          </fieldset>
        </>
      ) : (
        <>
          <fieldset id="fieldset-customer-age">
            <legend>What is your age group?</legend>
            <label htmlFor="gender-1">14-18</label>
            <input
              type="radio"
              id="age1"
              name="age"
              value="14-18"
              checked={signUpStateCustomer.age === "14-18"}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
            <label htmlFor="gender-2">19-24</label>
            <input
              type="radio"
              id="age2"
              name="age"
              value="19-24"
              checked={signUpStateCustomer.age === "19-24"}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
            <label htmlFor="ageGroup3">25-30</label>
            <input
              type="radio"
              id="age3"
              name="age"
              value="25-30"
              checked={signUpStateCustomer.age === "25-30"}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
            <label htmlFor="ageGroup4">31-40</label>
            <input
              type="radio"
              id="age4"
              name="age"
              value="31-40"
              checked={signUpStateCustomer.age === "31-40"}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
          </fieldset>

          <fieldset id="fieldset-gender">
            <legend>What is your gender?</legend>
            <label htmlFor="gender-1">Male</label>
            <input
              type="radio"
              id="gender-1"
              name="gender"
              value="Male"
              checked={signUpStateCustomer.gender === "Male"}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
            <label htmlFor="gender-2">Female</label>
            <input
              type="radio"
              id="gender-2"
              name="gender"
              value="Female"
              checked={signUpStateCustomer.gender === "Female"}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
            <label htmlFor="gender-3">Nonbinary</label>
            <input
              type="radio"
              id="gender-3"
              name="gender"
              value="Nonbinary"
              checked={signUpStateCustomer.gender === "Nonbinary"}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
            <label htmlFor="gender-4">Prefer not to say</label>
            <input
              type="radio"
              id="gender-4"
              name="gender"
              value="Prefer not to say"
              checked={signUpStateCustomer.gender === "Prefer not to say"}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
          </fieldset>

          <label htmlFor="icecreamFlavour">Icecream Flavour</label>
          <input
            type="text"
            id="icecreamFlavour"
            name="icecreamFlavour"
            required
            value={signUpStateCustomer.icecreamFlavour}
            onChange={(e) => handleOnChangeCustomer(e)}
          />

          <fieldset>
            <legend>
              In order to use this app, I consent to sharing my location
              information
            </legend>
            <label htmlFor="consentYes">I consent</label>
            <input
              type="radio"
              id="consentYes"
              name="consent"
              value="true"
              checked={signUpStateCustomer.consent === true}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
            <label htmlFor="consentNo">I do not consent</label>
            <input
              type="radio"
              id="consentNo"
              name="consent"
              value="false"
              checked={signUpStateCustomer.consent === false}
              onChange={(e) => handleOnChangeCustomer(e)}
            />
          </fieldset>
        </>
      )}
      { signUpStateCustomer.consent && (<button type="submit">Signup</button>)}
    </form>
  )
}

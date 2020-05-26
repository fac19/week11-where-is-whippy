// https://github.com/fac18/signpost/blob/master/client/src/components/AddNewService/AddNewService.js

import React, { useState, useEffect, useReducer, useContext } from "react"
import postSignUpInformation from "../../utils/postData"
import { AppContext } from "../AppContext"

export default function SignUp() {
  const {
    isVendor,
    signUpStateVendor,
    setSignUpStateVendor,
    signUpStateCustomer,
    setSignUpStateCustomer,
  } = useContext(AppContext)

  // const [state, dispatch] = useReducer(reducer, signUpState)

  // const handleOnChange = (e) => {
  //   dispatch({ field: e.target.name, value: e.target.value })
  // }

  const handleOnChangeVendor = (e) => {
    const property = e.target.name
    const newSignUpStateVendor = {
      ...signUpStateVendor,
      [property]: e.target.value,
    }
    setSignUpStateVendor(newSignUpStateVendor)
  }

  const handleOnChangeCustomer = (e) => {
    const property = e.target.name
    const newSignUpStateCustomer = {
      ...signUpStateCustomer,
      [property]: e.target.value,
    }
    setSignUpStateCustomer(newSignUpStateCustomer)
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   postSignUpInformation(state)
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error))
  //   //post signup.
  // }

  // onSubmit={handleSubmit}

  return (
    <section>
      <h1>Hello!</h1>
      <form>
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
        
      {isVendor ? (
          <label Htmlfor="vendorMobile">Mobile Number</label>
          <input
            type="tel"
            id="vendorMobile"
            name="mobile"
            required
            // onChange={handleOnChange}
          />
          <label htmlFor="vendorCompany">Company Name</label>
          <input
            type="text"
            id="vendorCompany"
            name="company"
            required
            // onChange={handleOnChange}
          />
          <fieldset id="vendorAlcohol">
            <legend>Do you sell alcohol?</legend>
            <label htmlFor="alcoholYes">Yes</label>
            <input
              type="radio"
              id="alcoholYes"
              name="alcohol"
              value="true"
              checked
              // onChange={handleOnChange}
            />

            <label htmlFor="alcoholNo">No</label>
            <input type="radio" id="alcoholNo" name="alcohol" value="false" />
          </fieldset>
          <fieldset id="vendorVegan">
            <legend>Do you offer vegan options?</legend>
            <label htmlFor="veganYes">Yes</label>
            <input
              type="radio"
              id="veganYes"
              name="vegan"
              value="true"
              checked
              // onChange={handleOnChange}
            />

            <label htmlFor="veganNo">No</label>
            <input
              type="radio"
              id="veganNo"
              name="vegan"
              value="false"
              // onChange={handleOnChange}
            />
          </fieldset>
        )
       : (
          <fieldset id="customerAge">
            <legend>What is your age group?</legend>
            <label htmlFor="age-group-1">14-18</label>
            <input
              type="radio"
              id="ageGroup1"
              name="ageGroup"
              value="14-18"
              checked
              onChange={handleOnChange}
            />
            <label htmlFor="age-group-2">19-24</label>
            <input
              type="radio"
              id="ageGroup2"
              name="ageGroup"
              value="19-24"
              onChange={handleOnChange}
            />
            <label htmlFor="ageGroup3">25-30</label>
            <input
              type="radio"
              id="ageGroup3"
              name="ageGroup"
              value="25-30"
              onChange={handleOnChange}
            />
            <label htmlFor="ageGroup4">31-40</label>
            <input
              type="radio"
              id="ageGroup4"
              name="ageGroup"
              value="31-40"
              onChange={handleOnChange}
            />
          </fieldset>

          <fieldset>
            <legend>
              In order to use this app, I consent to sharing my location
              information
            </legend>
            <label htmlFor="consent">I consent</label>
            <input
              type="radio"
              id="consent"
              name="consent"
              value="true"
              required
              onChange={handleOnChange}
            />
          </fieldset>
          
        </form>
      )}
    </section>
  )
}

// useEffect(
//   //checks to see if a user is a customer or vendor and will render the relevant form fields
//   () => {
//     isVendor
//       ? setSignUpState({
//           name: "",
//           email: "",
//           password: "",
//           mobile: "",
//           company_name: "",
//           alcohol: "",
//           vegan_option: "",
//         })
//       : setSignUpState({
//           name: "",
//           email: "",
//           password: "",
//           username: "",
//           age: "",
//           gender: "",
//           icecream_flavour: "",
//         })
//   },
//   []
// )

// const [submission, handleSubmission] = React.useState([])
// React.useEffect(() => {
//   const reqOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title: "React POST Request Example" }),
//   }
// fetch(url goes here, reqOptions)
//   .then(data =>)

// function reducer(state, { field, value }) {
//   return {
//     ...state,
//     [field]: value,
//   }
// }

// if (isVendor) {
//   const {
//     name,
//     email,
//     password,
//     mobile,
//     company_name,
//     alcohol,
//     vegan_option,
//   } = state
// } else {
//   const {
//     name,
//     email,
//     password,
//     username,
//     age,
//     gender,
//     icecream_flavour,
//   } = state
// }

//function handleFormSubmission(event){
//const username = document.getElementById('customerName').value
//axios.post(api url)
//.then(result =>)
//}

// function signUp({ redirect }) {
//   document.title = "Sign Up"
//   app.innerHTML = html
//   app.querySelector("form").addEventListener("submit", (e) => {
//     e.preventDefault()
//     const formData = new FormData(e.target)
//     const formObject = Object.fromEntries(formData)
//     fetch("https://dogs-rest.herokuapp.com/v1/users/", {
//       method: "POST",
//       body: JSON.stringify(formObject),

//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         window.localStorage.setItem("id", json.id)
//         window.localStorage.setItem("token", json.access_token)
//         redirect("/")
//       })
//       .catch((error) => {
//         console.log("error in signup!")
//         app.querySelector("#message").innerHTML = `<h1>${error} haha</h1>`
//       })
//   })
// }

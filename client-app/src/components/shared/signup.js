import React, { useState, useEffect } from "react"

export default function SignUp({ isVendor }) {
  const [submission, handleSubmission] = React.useState([])
  React.useEffect(() => {
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    }
    // fetch(url goes here, reqOptions)
    //   .then(data =>)
  })

  return (
    <section>
      {isVendor ? (
        <form action="submit">
          <label for="vendorName">Name</label>
          <input type="text" id="vendorName" name="name" required />

          <label for="vendorEmail">Email</label>
          <input type="email" id="vendorEmail" name="email" required />

          <label for="vendorPassword">Password</label>
          <input type="password" id="vendorPassword" name="password" required />

          <label for="vendorMobile">Mobile Number</label>
          <input type="tel" id="vendorMobile" name="mobile" required />

          <label for="vendorCompany">Company Name</label>
          <input type="text" id="vendorCompany" name="company" required />

          <fieldset id="vendorAlcohol">
            <legend>Do you sell alcohol?</legend>
            <label for="alcoholYes">Yes</label>
            <input
              type="radio"
              id="alcoholYes"
              name="alcohol"
              value="true"
              checked
            />

            <label for="alcoholNo">No</label>
            <input type="radio" id="alcoholNo" name="alcohol" value="false" />
          </fieldset>

          <fieldset id="vendorVegan">
            <legend>Do you offer vegan options?</legend>
            <label for="veganYes">Yes</label>
            <input
              type="radio"
              id="veganYes"
              name="vegan"
              value="true"
              checked
            />

            <label for="veganNo">No</label>
            <input type="radio" id="veganNo" name="vegan" value="false" />
          </fieldset>
          <button>Sign up</button>
        </form>
      ) : (
        <form action="">
          <label for="customerName">Name</label>
          <input type="text" id="customerName" name="name" required />

          <label for="customerEmail">Email</label>
          <input type="email" id="customerEmail" name="email" required />

          <label for="customerPassword">Password</label>
          <input
            type="password"
            id="customerPassword"
            name="password"
            required
          />

          <fieldset id="customerAge">
            <legend>What is your age group?</legend>
            <label for="age-group-1">14-18</label>
            <input
              type="radio"
              id="ageGroup1"
              name="ageGroup"
              value="14-18"
              checked
            />
            <label for="age-group-2">19-24</label>
            <input type="radio" id="ageGroup2" name="ageGroup" value="19-24" />
            <label for="ageGroup3">25-30</label>
            <input type="radio" id="ageGroup3" name="ageGroup" value="25-30" />
            <label for="ageGroup4">31-40</label>
            <input type="radio" id="ageGroup4" name="ageGroup" value="31-40" />
          </fieldset>

          <fieldset>
            <legend>
              In order to use this app, I consent to sharing my location
              information
            </legend>
            <label for="consent">I consent</label>
            <input
              type="radio"
              id="consent"
              name="consent"
              value="true"
              required
            />
          </fieldset>
          <button>Sign up</button>
        </form>
      )}
    </section>
  )
}

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
